import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Select from 'react-select';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

const Edit = ({ auth, node, nodes }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const selectOptions = nodes.map(n => ({
      value: n.id,
      label: n.stage ? `${n.stage} - ${n.question || ''}` : n.question,
    }));
    setOptions(selectOptions);
  }, [nodes]);
  console.log();
  const { data, setData, put, processing, errors, recentlySuccessful } = useForm({
    stage: node.stage,
    question: node.question,
    description: node.description,
    starter_question: node.starter_question,
    parent_id: node.parent_id,
    go_to_id: node.go_to_id,
    yes_action_id: node.yes_action_id,
    no_action_id: node.no_action_id,
  });

  const handleChange = (e) => {
    setData(e.target.id, e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  const handleSelectChange = (field, selectedOption) => {
    setData(field, selectedOption ? selectedOption.value : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/decision-tree/${node.id}`);
  };

  const isStarterQuestion = data.starter_question;
  const hasGoToAction = !!data.go_to_id;

  const getDefaultValue = (field) => options.find(option => option.value === data[field]);

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-bold text-gray-900">Edit Node</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <InputLabel htmlFor="stage" value="Stage" />
              <TextInput
                id="stage"
                className="mt-1 block w-full"
                value={data.stage}
                onChange={handleChange}
                required={isStarterQuestion}
                autoComplete="stage"
              />
              <InputError className="mt-2" message={errors.stage} />
            </div>

            {!isStarterQuestion && (
              <>
                <div>
                  <InputLabel htmlFor="question" value="Question" />
                  <TextInput
                    id="question"
                    className="mt-1 block w-full"
                    value={data.question}
                    onChange={handleChange}
                    required
                    autoComplete="question"
                  />
                  <InputError className="mt-2" message={errors.question} />
                </div>

                <div>
                  <InputLabel htmlFor="parent_id" value="Parent ID" />
                  <Select
                    id="parent_id"
                    options={options}
                    onChange={(selectedOption) => handleSelectChange('parent_id', selectedOption)}
                    className="mt-1 block w-full"
                    defaultValue={getDefaultValue('parent_id')}
                  />
                  <InputError className="mt-2" message={errors.parent_id} />
                </div>
              </>
            )}

            <div>
              <InputLabel htmlFor="description" value="Description" />
              <textarea
                id="description"
                className="mt-1 block w-full"
                value={data.description}
                onChange={handleChange}
              ></textarea>
              <InputError className="mt-2" message={errors.description} />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="starter_question"
                className="mr-2"
                checked={data.starter_question}
                onChange={handleChange}
              />
              <InputLabel htmlFor="starter_question" value="Starter Question" />
              <InputError className="mt-2" message={errors.starter_question} />
            </div>

            <div>
              <InputLabel htmlFor="go_to_id" value="Go to Action ID" />
              <Select
                id="go_to_id"
                options={options}
                onChange={(selectedOption) => handleSelectChange('go_to_id', selectedOption)}
                className="mt-1 block w-full"
                defaultValue={getDefaultValue('go_to_id')}
              />
              <InputError className="mt-2" message={errors.go_to_id} />
            </div>

            {!hasGoToAction && (
              <>
                <div>
                  <InputLabel htmlFor="yes_action_id" value="Yes Action ID" />
                  <Select
                    id="yes_action_id"
                    options={options}
                    onChange={(selectedOption) => handleSelectChange('yes_action_id', selectedOption)}
                    className="mt-1 block w-full"
                    defaultValue={getDefaultValue('yes_action_id')}
                  />
                  <InputError className="mt-2" message={errors.yes_action_id} />
                </div>

                <div>
                  <InputLabel htmlFor="no_action_id" value="No Action ID" />
                  <Select
                    id="no_action_id"
                    options={options}
                    onChange={(selectedOption) => handleSelectChange('no_action_id', selectedOption)}
                    className="mt-1 block w-full"
                    defaultValue={getDefaultValue('no_action_id')}
                  />
                  <InputError className="mt-2" message={errors.no_action_id} />
                </div>
              </>
            )}

            <div className="flex items-center gap-4">
              <PrimaryButton disabled={processing}>Save</PrimaryButton>
              <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
              >
                <p className="text-sm text-gray-600">Saved.</p>
              </Transition>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Edit;
