<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('decision_trees', function (Blueprint $table) {
            $table->renameColumn('category', 'stage');
            $table->unsignedBigInteger('yes_action_id')->nullable();
            $table->unsignedBigInteger('no_action_id')->nullable();

            $table->foreign('yes_action_id')->references('id')->on('decision_trees')->onDelete('set null');
            $table->foreign('no_action_id')->references('id')->on('decision_trees')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::table('decision_trees', function (Blueprint $table) {
            $table->renameColumn('stage', 'category');
            $table->dropForeign(['yes_action_id']);
            $table->dropForeign(['no_action_id']);
            $table->dropColumn('yes_action_id');
            $table->dropColumn('no_action_id');
        });
    }
};
