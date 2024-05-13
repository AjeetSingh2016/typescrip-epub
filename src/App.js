/* eslint-disable no-unused-vars */
import { useRef } from 'react'
import {
  EpubViewer,
  ReactEpubViewer
} from 'react-epub-viewer'

const App = () => {
  const viewerRef = useRef(null);
  
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <ReactEpubViewer 
        url='https://s3.amazonaws.com/moby-dick/OPS/package.opf'
        ref={viewerRef}
      />
    </div>
  );
}

export default App