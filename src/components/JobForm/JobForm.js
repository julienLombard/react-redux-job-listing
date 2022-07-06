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

    const checkedBox = [];
    e.target.skills.forEach((e) =>
      e.checked === true ? checkedBox.push({ name: e.defaultValue }) : null
    );

    const newJob = {
      smallCompany: {
        companyName: e.target.entreprise.value,
        logoImageLink: e.target.logo.value,
      },
      details: {
        city: e.target.city.value,
        acceptRemote: e.target.acceptRemote.value,
        requiredExperience: e.target.experience.value,
        salary: `${e.target.salary_min.value}k  ➡  ${e.target.salary_max.value}k`,
      },
      title: e.target.title.value,
      publishDate: Date.now(),
      description: e.target.description.value,
      descriptionPreview: e.target.description.value.substring(0, 400),
      skillsList: checkedBox,
    };

    addJob(jobsCol, newJob);
    dispatch(fetchAsyncJobsList());
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
          <input type="text" name="title" placeholder="Poste" />
        </div>

        {/* Ville */}
        <div>
          <input type="text" name="city" placeholder="Ville" />
        </div>

        {/* Compétences */}
        <fieldset className="fieldset-skills">
          <legend>Compétences</legend>

          <div className="div-skills">
            <div>
              {/* Ligne 1 */}
              <div>
                <input type="checkbox" name="skills" value="JavaScript" />
                <label htmlFor="JavaScript">JavaScript</label>
              </div>

              <div>
                <input type="checkbox" name="skills" value="Java" />
                <label htmlFor="Java">Java</label>
              </div>

              <div>
                <input type="checkbox" name="skills" value="Ruby" />
                <label htmlFor="Ruby">Ruby</label>
              </div>
            </div>

            {/* Ligne 2 */}
            <div>
              <div>
                <input type="checkbox" name="skills" value="React JS" />
                <label htmlFor="React JS">React JS</label>
              </div>

              <div>
                <input type="checkbox" name="skills" value="Python" />
                <label htmlFor="Python">Python</label>
              </div>

              <div>
                <input type="checkbox" name="skills" value="PHP" />
                <label htmlFor="PHP">PHP</label>
              </div>
            </div>

            {/* Ligne 3 */}
            <div>
              <div>
                <input type="checkbox" name="skills" value="Vue JS" />
                <label htmlFor="Vue JS">Vue JS</label>
              </div>

              <div>
                <input type="checkbox" name="skills" value="Django" />
                <label htmlFor="Django">Django</label>
              </div>

              <div>
                <input type="checkbox" name="skills" value="Symfony" />
                <label htmlFor="Symfony">Symfony</label>
              </div>
            </div>
          </div>
        </fieldset>

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
            <input type="num" name="salary_min" placeholder="min" />
            <input type="num" name="salary_max" placeholder="max" />
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
    logoImageLink: PropTypes.string.isRequired,
  },
  details: {
    city: PropTypes.string.isRequired,
    acceptRemote: PropTypes.string.isRequired,
    requiredExperience: PropTypes.number.isRequired,
    salary: PropTypes.string.isRequired,
  },
  title: PropTypes.string.isRequired,
  publishDate: Date.now(),
  description: PropTypes.string.isRequired,
  descriptionPreview: PropTypes.string.isRequired,
  skillsList: [
    { name: PropTypes.string.isRequired },
    { name: PropTypes.string.isRequired },
    { name: PropTypes.string.isRequired },
  ],
};
