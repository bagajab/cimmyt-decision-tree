<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class DecisionTree extends Model
{
    use HasFactory, NodeTrait;

    protected $table = 'decision_trees';

    protected $fillable = ['category', 'question', 'description', 'starter_question', 'go_to_id'];

    public function goToNode()
    {
        return $this->belongsTo(DecisionTree::class, 'go_to_id');
    }
}
