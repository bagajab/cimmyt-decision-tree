<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // Step 1: Remove the NOT NULL constraint
        Schema::table('decision_trees', function (Blueprint $table) {
            $table->text('question')->nullable()->change();
        });

        // Step 2: Update any NULL values to a default string
        DB::table('decision_trees')->whereNull('question')->update(['question' => '']);

        // Step 3: Reapply the NOT NULL constraint
        Schema::table('decision_trees', function (Blueprint $table) {
            $table->text('question')->nullable(true)->change();
        });
    }

    public function down()
    {
        // Revert changes in reverse order
        Schema::table('decision_trees', function (Blueprint $table) {
            $table->string('question', 255)->nullable()->change();
        });

        DB::table('decision_trees')->where('question', '')->update(['question' => null]);

        Schema::table('decision_trees', function (Blueprint $table) {
            $table->string('question', 255)->nullable(false)->change();
        });
    }
};
