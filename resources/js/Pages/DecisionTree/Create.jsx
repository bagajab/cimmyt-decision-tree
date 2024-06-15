import React from 'react';
import { useForm, Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import Checkbox from '@/Components/Checkbox';

const Create = ({ auth }) => {
  const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
    category: '',
    question: '',
    description: '',
    starter_question: false,
    parent_id: null
  });

  const handleChange = (e) => {
    setData(e.target.id, e.target.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/decision-tree');
  };

  return (
    <AuthenticatedLayout user={auth.user}>
       <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-lg font-medium text-gray-900">Add Node</h2>
        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <InputLabel htmlFor="category" value="Category" />
            <TextInput
              id="category"
              className="mt-1 block w-full"
              value={data.category}
              onChange={handleChange}
              required
              isFocused
              autoComplete="category"
            />
            <InputError className="mt-2" message={errors.category} />
          </div>

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
            <Checkbox
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
            <InputLabel htmlFor="parent_id" value="Parent ID" />
            <TextInput
              id="parent_id"
              type="number"
              className="mt-1 block w-full"
              value={data.parent_id || ''}
              onChange={handleChange}
              autoComplete="parent_id"
            />
            <InputError className="mt-2" message={errors.parent_id} />
          </div>

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

      </div>

    </AuthenticatedLayout>
  );
};

export default Create;
