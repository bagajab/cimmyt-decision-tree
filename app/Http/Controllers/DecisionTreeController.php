<?php
namespace App\Http\Controllers;

use App\Models\DecisionTree;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DecisionTreeController extends Controller
{
    public function index()
    {
        $nodes = DecisionTree::with('children')->whereNull('parent_id')->get();
        return Inertia::render('DecisionTree/Index', ['nodes' => $nodes]);
    }

    public function create()
    {
        return Inertia::render('DecisionTree/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required|string|max:255',
            'question' => 'required|string|max:255',
            'description' => 'nullable|string',
            'starter_question' => 'required|boolean',
            'parent_id' => 'nullable|exists:decision_trees,id',
        ]);

        DecisionTree::create($validated);

        return redirect()->route('decision-tree.index');
    }

    public function show($id)
    {
        $node = DecisionTree::with('children')->findOrFail($id);
        return Inertia::render('DecisionTree/Show', ['node' => $node]);
    }

    public function edit($id)
    {
        $node = DecisionTree::findOrFail($id);
        return Inertia::render('DecisionTree/Edit', ['node' => $node]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'category' => 'required|string|max:255',
            'question' => 'required|string|max:255',
            'description' => 'nullable|string',
            'starter_question' => 'required|boolean',
            'parent_id' => 'nullable|exists:decision_tree,id',
        ]);

        $node = DecisionTree::findOrFail($id);
        $node->update($validated);

        return redirect()->route('decision-tree.index');
    }

    public function destroy($id)
    {
        $node = DecisionTree::findOrFail($id);
        $node->delete();

        return redirect()->route('decision-tree.index');
    }
}
