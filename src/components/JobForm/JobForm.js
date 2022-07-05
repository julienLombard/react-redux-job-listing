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
        compagnyName: e.target.entreprise.value,
      },
      title: e.target.titre.value,
      publishDate: Date.now(),
      description: e.target.description.value,
      descriptionPreview: e.target.description.value.substring(0, 400),
    };

    // smallCompany.logoImageLink
    // details.city
    // details.acceptRemote
    // details.requiredExperience
    // details.salary

    // addJob(jobsCol, newJob);
    // dispatch(fetchAsyncJobsList());
  };

  return (
    <div className="div-form">
      <form onSubmit={handleForm}>
        <h2>Ajouter un Job</h2>

        {/* Entreprise */}
        <div>
          <input type="text" name="entreprise" placeholder="Entreprise" />
        </div>

        {/* Logo */}
        <div>
          <input type="url" name="logo" placeholder="Url logo" />
        </div>

        {/* Titre */}
        <div>
          <input type="text" name="titre" placeholder="Poste" />
        </div>

        {/* Ville */}
        <div>
          <input type="text" name="ville" placeholder="Ville" />
        </div>

        {/* Télétravail */}
        <div className="div-select">
          <p>Télétravail</p>
          <select name="acceptRemote" placeholder="Télétravail">
            <option value="" className="option-title">
              Télétravail
            </option>
            <option value="non accepté">non accepté</option>
            <option value="occasionnel">occasionnel</option>
            <option value="régulier">régulier</option>
            <option value="possible">possible</option>
            <option value="total">total</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <p>Expérience</p>
          <select name="experience">
            <option value="" className="option-title">
              Expérience
            </option>
            <option value="< 1">moins d'un an</option>
            <option value="1">1 an</option>
            <option value="2">2 ans</option>
            <option value="3">3 ans</option>
            <option value="4">4 ans</option>
            <option value="5">5 ans</option>
          </select>
        </div>

        {/* Salaire */}
        <div>
          <p>Salaire</p>
          <div className="div-salary">
            <input type="num" name="salaire_min" placeholder="min" />
            <input type="num" name="salaire_max" placeholder="max" />
          </div>
        </div>

        {/* Description */}
        <div>
          <textarea
            name="description"
            rows="5"
            cols="33"
            placeholder="Description"
          />
        </div>

        {/* Submit */}
        <input type="submit" value="Ajouter" className="submit" />
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
