<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DecisionTree;

class DecisionTreeSeeder extends Seeder
{
    public function run()
    {
        // Data extracted and categorized from the Excel file
        $data = [
            [
                'category' => 'Introduction',
                'question' => 'Introduction',
                'description' => null,
                'starter_question' => true,
                'children' => [
                    [
                        'category' => 'Introduction',
                        'question' => 'All decisions made in context of Target Product Profiles...',
                        'description' => null,
                        'starter_question' => false,
                    ],
                ],
            ],
            [
                'category' => 'Starter questions',
                'question' => 'Starter questions',
                'description' => 'Go to',
                'starter_question' => true,
                'children' => [
                    [
                        'category' => 'Trait Genetic Scoping',
                        'question' => 'Markers for my trait exist in the literature and are publicly available',
                        'description' => 'Stage 3.6',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Trait Genetic Scoping',
                        'question' => 'Does your trait exist in your breeding parents, populations, or pools?',
                        'description' => 'Stage 2',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                        'children' => [
                            [
                                'category' => 'Trait Genetic Scoping',
                                'question' => 'Does your trait exist in your breeding parents or populations?',
                                'description' => 'Stage 1',
                                'starter_question' => false,
                                'go_to_id' => null, // Example setting, update with actual ID
                            ],
                            [
                                'category' => 'Trait Genetic Scoping',
                                'question' => 'Is your trait absent from parents?',
                                'description' => 'Stage 1',
                                'starter_question' => false,
                                'go_to_id' => null, // Example setting, update with actual ID
                            ],
                        ],
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Development of efficient, robust phenotyping methods for key traits',
                        'description' => 'Valid across landraces and elite lines. The level of phenotyping required depends on the degree of variation in the population.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Scoping, including accessing historical knowledge',
                        'description' => 'Scope adapted elite first, then unadapted elite, landraces, wild species.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Determine heritability of trait and stability over environments',
                        'description' => 'This should provide an indication of the genetic control of the trait.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'There are several factors to consider when deciding...',
                        'description' => 'Multiple sources of the high-value trait in a given program can increase the chance of success.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Do power calculation before finalising the GWAS strategy',
                        'description' => 'Minimum high value individuals 50 to 100 depending on population structure.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Do power calculations when considering the bi-parental/NAM/MAGIC mapping populations',
                        'description' => 'Use parents that segregate for the trait. Try to maximise the range of phenotypic values.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Conduct QC on your bi-parental/NAM/MAGIC mapping population',
                        'description' => 'Use the cheapest genotyping platform available. Ensure there is good marker coverage across the genome.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Genotype GWAS',
                        'description' => 'For GWAS need a high density of markers >10,000.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Inbreeding and seed multiplication for bi-parental/NAM/MAGIC populations',
                        'description' => 'Consider rapid propagation technologies for clonal species.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Phenotype your population over at least two seasons',
                        'description' => 'Replicated field trial with parents as checks.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Data analysis - GWAS populations',
                        'description' => 'QTL mapping to identify loci, confidence intervals.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Data analysis - Bi-parental, NAM, MAGIC populations',
                        'description' => 'GACD recommended for heterozygous F1 mapping populations.',
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                    [
                        'category' => 'Develop resources for and determine marker-trait association',
                        'question' => 'Characterise QTL based on physical interval, PVE, confidence interval',
                        'description' => null,
                        'starter_question' => false,
                        'go_to_id' => null, // Example setting, update with actual ID
                    ],
                ],
            ],
            [
                'category' => 'Genetic validation (Fine mapping, fine-tuning haplotype, marker conversion, validation and introgression into elite donor)',
                'question' => 'Genetic validation of markers',
                'description' => null,
                'starter_question' => false,
                'children' => [
                    [
                        'category' => 'Genetic validation (Fine mapping, fine-tuning haplotype, marker conversion, validation and introgression into elite donor)',
                        'question' => 'Fine mapping and fine-tuning haplotypes',
                        'description' => 'Detailed genetic analysis to refine marker positions and haplotypes.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                    [
                        'category' => 'Genetic validation (Fine mapping, fine-tuning haplotype, marker conversion, validation and introgression into elite donor)',
                        'question' => 'Marker conversion and validation',
                        'description' => 'Convert markers to a user-friendly format and validate in different genetic backgrounds.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                    [
                        'category' => 'Genetic validation (Fine mapping, fine-tuning haplotype, marker conversion, validation and introgression into elite donor)',
                        'question' => 'Introgression into elite donor',
                        'description' => 'Introduce validated markers into elite donor lines.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                ],
            ],
            [
                'category' => 'Phenotypic validation of Elite donor/Trait deployment/Product testing/Haplotype optimisation',
                'question' => 'Phenotypic validation and trait deployment',
                'description' => null,
                'starter_question' => false,
                'children' => [
                    [
                        'category' => 'Phenotypic validation of Elite donor/Trait deployment/Product testing/Haplotype optimisation',
                        'question' => 'Phenotypic validation in different environments',
                        'description' => 'Validate trait performance in multiple environments and conditions.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],

                    [
                        'category' => 'Phenotypic validation of Elite donor/Trait deployment/Product testing/Haplotype optimisation',
                        'question' => 'Phenotypic validation in different environments',
                        'description' => 'Validate trait performance in multiple environments and conditions.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                    [
                        'category' => 'Phenotypic validation of Elite donor/Trait deployment/Product testing/Haplotype optimisation',
                        'question' => 'Trait deployment strategy',
                        'description' => 'Develop a strategy for deploying traits into breeding programs.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                    [
                        'category' => 'Phenotypic validation of Elite donor/Trait deployment/Product testing/Haplotype optimisation',
                        'question' => 'Product testing and validation',
                        'description' => 'Test and validate the product in target environments and markets.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                    [
                        'category' => 'Phenotypic validation of Elite donor/Trait deployment/Product testing/Haplotype optimisation',
                        'question' => 'Haplotype optimization',
                        'description' => 'Optimize haplotypes for better performance and stability.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                ],
            ],
            [
                'category' => 'Deployment of elite donor into breeding program',
                'question' => 'Deployment strategy',
                'description' => null,
                'starter_question' => false,
                'children' => [
                    [
                        'category' => 'Deployment of elite donor into breeding program',
                        'question' => 'Integration into breeding program',
                        'description' => 'Integrate elite donors into the breeding program.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                    [
                        'category' => 'Deployment of elite donor into breeding program',
                        'question' => 'Monitoring and evaluation',
                        'description' => 'Monitor and evaluate the performance of elite donors in the breeding program.',
                        'starter_question' => false,
                        'go_to_id' => null,
                    ],
                ],
            ],
        ];

        // Recursive function to create nodes
        function createNodes($nodes, $parentId = null)
        {
            foreach ($nodes as $node) {
                $newNode = DecisionTree::create([
                    'category' => $node['category'],
                    'question' => $node['question'],
                    'description' => $node['description'] ?? null,
                    'starter_question' => $node['starter_question'],
                    'go_to_id' => $node['go_to_id'] ?? null,
                    'parent_id' => $parentId,
                ]);

                if (isset($node['children'])) {
                    createNodes($node['children'], $newNode->id);
                }
            }
        }

        // Seed the database with the provided data
        createNodes($data);
    }
}
