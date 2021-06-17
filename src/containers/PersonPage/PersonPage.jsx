/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonInfo from "@components/PersonPage/PersonInfo";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getApiResource } from "@utils/network";
import styles from "./PersonPage.module.css";
import { useEffect, useState } from "react";
import { API_PERSON } from "@constants/api";
import { getPeopleImage } from "@services/getPeopleData";

const PersonPage = ({ match, setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setPersonInfo([
          { tittle: "Height", data: res.height },
          { tittle: "Mass", data: res.mass },
          { tittle: "Hair Color", data: res.hair_color },
          { tittle: "Eye Color", data: res.eye_color },
          { tittle: "Birth Year", data: res.birth_year },
          { tittle: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <h1>{personName}</h1>

      <PersonPage personPhoto={personPhoto} personName={personName} />

      {personInfo && <PersonInfo personInfo={personInfo} />}
    </>
  );
};

PersonPage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
