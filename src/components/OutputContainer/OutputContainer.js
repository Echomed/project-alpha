import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Tile } from 'carbon-components-react';
import AudioWave from '../AudioWave';
import TranscriptBox from '../TranscriptBox';
import { Link } from 'react-router-dom';
import styles from './outputcontainer.module.css';
import axios from 'axios';

export const OutputContainer = ({
  audioAnalyzer,
  audioDataArray,
  audioDuration,
  audioSource,
  audioWaveContainerRef,
  isTranscribing,
  keywordInfo,
  transcriptArray,
}) => {
  const [length, setLength] = useState(0);

  let textToPost = '';

  const handleClick = () => {
    axios
      .post('http://localhost:5000/postText', {
        text: textToPost,
      })
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };

  const getLength = (len) => {
    setLength(len);
    localStorage.setItem('length', len);
  };

  const getText = (text) => {
    textToPost = text;
  };
  return (
    <Tile className="output-container">
      <h3 className="container-title">Output</h3>
      <FormGroup legendText="Audio">
        <AudioWave
          audioWaveContainerRef={audioWaveContainerRef}
          data={audioDataArray}
          duration={audioDuration}
          isTranscribing={isTranscribing}
          audioSource={audioSource}
          audioAnalyzer={audioAnalyzer}
        />
      </FormGroup>
      <FormGroup legendText="Transcript">
        <TranscriptBox
          keywordInfo={keywordInfo}
          transcriptArray={transcriptArray}
          getLength={getLength}
          getText={getText}
        />
      </FormGroup>
      {length !== 0 ? (
        <button
          className={styles.goToDashboard}
          type="button"
          onClick={handleClick}
        >
          Go to Dashboard
        </button>
      ) : (
        <div></div>
      )}
    </Tile>
  );
};

OutputContainer.propTypes = {
  audioAnalyzer: PropTypes.object.isRequired,
  audioDataArray: PropTypes.arrayOf(PropTypes.number),
  audioDuration: PropTypes.number,
  audioSource: PropTypes.string,
  audioWaveContainerRef: PropTypes.object.isRequired,
  isTranscribing: PropTypes.bool,
  keywordInfo: PropTypes.arrayOf(PropTypes.object),
  transcriptArray: PropTypes.arrayOf(PropTypes.object),
};

OutputContainer.defaultProps = {
  audioDataArray: [],
  audioDuration: 0,
  audioSource: '',
  isTranscribing: false,
  keywordInfo: [],
  transcriptArray: [],
};

export default OutputContainer;
