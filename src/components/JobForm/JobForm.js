import { addDoc } from 'firebase/firestore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { jobsCol } from '../../data/firebase.config';
import { PropTypes } from 'prop-types';
import { fetchAsyncJobsList } from '../../features/jobsList/jobsListSlice';

export const JobForm = () => {
  const dispatch = useDispatch();

  const addJob = async (col, job) => {
    try {
      addDoc(col, job);
      console.log('Job added to list');
      alert('Le job a bien été ajouté à la liste !');
    } catch (e) {
      console.log('Error adding Job', e);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    const newJob = {
      smallCompagny: {
        compagnyName: e.target[0].value,
      },
      title: e.target.titre.value,
      publishDate: Date.now(),
      description: e.target.description.value,
      descriptionPreview: e.target.description.value.substring(0, 400),
    };

    addJob(jobsCol, newJob);
    dispatch(fetchAsyncJobsList());
  };

  return (
    <div className="div-form">
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

JobForm.prototype = {
  handleForm: PropTypes.func.isRequired,
  smallCompagny: {
    compagnyName: PropTypes.string.isRequired,
  },
  title: PropTypes.string.isRequired,
  publishDate: Date.now(),
  description: PropTypes.string.isRequired,
  descriptionPreview: PropTypes.string.isRequired,
};
