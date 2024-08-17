<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class DecisionTree extends Model
{
    use HasFactory, NodeTrait;

    protected $table = 'decision_trees';

    protected $fillable = [
        'stage', 'question', 'description', 'starter_question', 'parent_id', 'yes_action_id', 'no_action_id', 'go_to_id'
    ];
   
    

    public function yesAction()
    {
        return $this->belongsTo(DecisionTree::class, 'yes_action_id');
    }

    public function noAction()
    {
        return $this->belongsTo(DecisionTree::class, 'no_action_id');
    }

    public function goToAction()
    {
        return $this->belongsTo(DecisionTree::class, 'go_to_id');
    }

    public function children()
    {
        return $this->hasMany(DecisionTree::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(DecisionTree::class, 'parent_id');
    }

    public function toTreeFormat()
    {
        $children = $this->children()->get()->map->toTreeFormat();
        $goToAction = $this->goToAction()->first();
        $yesAction = $this->yesAction()->first();
        $noAction = $this->noAction()->first();

        if ($goToAction) {
            $children = $children->push($goToAction->toTreeFormat());
        }

        if ($yesAction) {
            $children = $children->push($yesAction->toTreeFormat());
        }

        if ($noAction) {
            $children = $children->push($noAction->toTreeFormat());
        }

        return [
            'name' => $this->stage ? "{$this->stage} - {$this->question}" : $this->question,
            'attributes' => [
                'stage' => $this->stage,
                'question' => $this->question,
                'goToAction' => $goToAction ? $goToAction->id : null,
                'yesAction' => $yesAction ? $yesAction->id : null,
                'noAction' => $noAction ? $noAction->id : null,
            ],
            'is_stage' => $this->stage ? true : false,
            'children' => $children->isEmpty() ? null : $children->toArray(),
        ];
    }
}
