import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Select from 'react-select';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

const Create = ({ auth, nodes }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const selectOptions = nodes.map(node => ({
      value: node.id,
      label: node.stage ? `${node.stage} - ${node.question || ''}` : node.question,
    }));
    setOptions(selectOptions);
  }, [nodes]);

  const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
    stage: '',
    question: '',
    description: '',
    starter_question: false,
    parent_id: null,
    go_to_id: null,
    yes_action_id: null,
    no_action_id: null,
  });

  const handleChange = (e) => {
    setData(e.target.id, e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  const handleSelectChange = (field, selectedOption) => {
    setData(field, selectedOption ? selectedOption.value : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/decision-tree');
  };

  const isStarterQuestion = data.starter_question;
  const hasGoToAction = !!data.go_to_id;

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-bold text-gray-900">Add Node</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <InputLabel htmlFor="stage" value="Stage" />
              <TextInput
                id="stage"
                className="mt-1 block w-full"
                value={data.stage}
                onChange={handleChange}
                required={isStarterQuestion}
                isFocused
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
                  />
                  <InputError className="mt-2" message={errors.no_action_id} />
                </div>
              </>
            )}

            <div className="flex items-center gap-4">
              <PrimaryButton disabled={processing}>Add</PrimaryButton>
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

export default Create;
