<?php

namespace App\Http\Controllers;

use App\Models\DecisionTree;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DecisionTreeController extends Controller
{
    public function index()
    {
        $nodes = DecisionTree::with('parent')->get()->map(function ($node) {
            $node->stage = $this->findStage($node);
            return $node;
        });
        return Inertia::render('DecisionTree/Index', ['nodes' => $nodes]);
    }

    public function create()
    {
        $nodes = DecisionTree::all();
        return Inertia::render('DecisionTree/Create', ['nodes' => $nodes]);
    }

    public function edit($id)
    {
        $node = DecisionTree::findOrFail($id);
        $nodes = DecisionTree::all();
        return Inertia::render('DecisionTree/Edit', [
            'node' => $node,
            'nodes' => $nodes
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'stage' => 'nullable|string|max:255',
            'question' => 'nullable|string|max:2024',
            'description' => 'nullable|string',
            'starter_question' => 'required|boolean',
            'parent_id' => 'nullable|exists:decision_trees,id',
            'go_to_id' => 'nullable|exists:decision_trees,id',
            'yes_action_id' => 'nullable|exists:decision_trees,id',
            'no_action_id' => 'nullable|exists:decision_trees,id',
        ]);

        DecisionTree::create($validated);

        return redirect()->route('decision-tree.index');
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'stage' => 'nullable|string|max:255',
            'question' => 'nullable|string|max:2024',
            'description' => 'nullable|string',
            'starter_question' => 'required|boolean',
            'parent_id' => 'nullable|exists:decision_trees,id',
            'go_to_id' => 'nullable|exists:decision_trees,id',
            'yes_action_id' => 'nullable|exists:decision_trees,id',
            'no_action_id' => 'nullable|exists:decision_trees,id',
        ]);

        $node = DecisionTree::findOrFail($id);
        $node->update($validated);

        return redirect()->route('decision-tree.index');
    }

    private function findStage($node)
    {
        if ($node->stage) {
            return $node->stage;
        }

        if ($node->parent) {
            return $this->findStage($node->parent);
        }

        return null; // Default value if no parent has a stage
    }
}
