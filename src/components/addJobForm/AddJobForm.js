import React from 'react';
import './addJobForm.css';

export const AddJobForm = (props) => {
  const [jobs, setjobs] = props.data;

  const handleForm = (e) => {
    e.preventDefault();

    const newJob = {
      entreprise: e.target[0].value,
      title: e.target[1].value,
      createAt: Date.now(),
      description: e.target[2].value,
      descriptionPreview: e.target[2].value.substring(0, 2),
    };
    setjobs([...jobs, newJob]);
  };

  return (
    <div>
      <h2>form</h2>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="entreprise">Entreprise </label>
          <input type="text" name="entreprise" />
        </div>
        <div>
          <label htmlFor="titre">Titre </label>
          <input type="text" name="titre" />
        </div>
        <div>
          <label name="description">Description</label>
          <textarea name="description" rows="5" cols="33" />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};
