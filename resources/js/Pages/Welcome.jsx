import { Head } from "@inertiajs/react";
import { useRef, useState } from "react";
import Header, { DecisionTreeBanner } from "./DecisionTree/Header";

const Welcome = ({ auth, laravelVersion, phpVersion, nodes = [] }) => {
    console.log({ nodes });
    const stages = nodes.filter((node) => node.starter_question);
    const [currentStage, setCurrentStage] = useState(stages[0]);
    const [path, setPath] = useState([stages[0]]);
    const treeRef = useRef();

    const handleStageClick = (stage) => {
        setCurrentStage(stage);
        setPath([stage]);
    };

    const handleChildClick = (child) => {
        setCurrentStage(child);
        setPath((prevPath) => [...prevPath, child]);
    };

    const handlePathClick = (node, index) => {
        setCurrentStage(node);
        setPath((prevPath) => prevPath.slice(0, index + 1));
    };

    const lastNodeInPath = path[path.length - 1];
    let currentChildren = nodes.filter((node) => node.parent_id === lastNodeInPath.id);

    // If there are no children and go_to_id exists, find the node with go_to_id
    if (currentChildren.length === 0 && lastNodeInPath.go_to_id) {
        const goToNode = nodes.find((node) => node.id === lastNodeInPath.go_to_id);
        if (goToNode) {
            currentChildren = [goToNode];
        }
    }

    // If there are still no children and no go_to_id, set currentChildren to an empty array
    if (currentChildren.length === 0) {
        currentChildren = [];
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Decision Tree" />
            <Header />
            <DecisionTreeBanner />

            <div className="mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-56 my-5">
                <div className="flex w-full gap-4">
                    <div className="w-3/12 flex flex-col gap-2">
                        {stages.map((stage) => (
                            <div
                                key={stage.id}
                                onClick={() => handleStageClick(stage)}
                                className="w-full h-auto cursor-pointer bg-[#E0E0E0] shadow-md rounded-lg p-4 flex items-center justify-start transition-transform duration-300 hover:scale-105 hover:bg-[#D0D0D0]"
                            >
                                <h3 className="text-base font-semibold text-black">
                                    {stage.stage}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <div className="w-3/12 bg-white shadow-md rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-black mb-2">
                            Current Path:
                        </h4>
                        <div className="flex gap-2 flex-wrap">
                            <ol className="relative text-gray-500 border-l p-2 border-gray-200 dark:border-gray-700 dark:text-gray-400">
                                {path.map((node, index) => (
                                    <li
                                        className="mb-10 ml-6 cursor-pointer"
                                        key={node.id}
                                        onClick={() => handlePathClick(node, index)}
                                    >
                                        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                            {index + 1}
                                        </span>
                                        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                                            <p className="text-sm font-semibold text-black">
                                                {node.question || node.stage}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="w-6/12 h-auto flex flex-col gap-4">
                        {currentChildren.length > 0 ? (
                            <div className="grid grid-cols-3 gap-4 p-4">
                                {currentChildren.map((child) => (
                                    <div
                                        key={child.id}
                                        onClick={() => handleChildClick(child)}
                                        className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start justify-start cursor-pointer transition-transform duration-300 hover:scale-105"
                                    >
                                        <h4 className="text-sm font-semibold text-black">
                                            {child.question ? child.question : child.stage}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex justify-center items-start h-full relative">
                                <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow-md border-2 border-green-500 zigzag-border">
                                    <p className="text-base">
                                        {lastNodeInPath.question || lastNodeInPath.stage}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Welcome;
