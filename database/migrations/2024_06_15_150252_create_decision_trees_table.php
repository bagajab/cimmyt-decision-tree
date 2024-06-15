<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Kalnoy\Nestedset\NestedSet;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('decision_trees', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('question');
            $table->text('description')->nullable();
            $table->boolean('starter_question')->default(false);
            $table->unsignedBigInteger('go_to_id')->nullable();
            $table->foreign('go_to_id')->references('id')->on('decision_trees')->onDelete('set null');
            NestedSet::columns($table);
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('decision_trees');
    }
};
