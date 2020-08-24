import React, {useCallback, useState} from 'react';
import MyFormik from './view/my-formik';
import MyFinalForm from './view/my-final-form';
import MyFinalFormSubscription from './view/my-final-form-subscription';
import './App.css';

function App() {
  const [selectedView, setSelectedView] = useState('final-form-subscription');
  const viewClick = useCallback((view) => {
    setSelectedView(view)
  }, [setSelectedView]);

  const views = {
    'formik': <MyFormik/>,
    'final-form': <MyFinalForm/>,
    'final-form-subscription': <MyFinalFormSubscription/>
  };
  return (<>
    <div className="button-section">
    {
      Object.keys(views).map(view => (<button className={selectedView === view ? 'selected': ''}
          key={view} onClick={() => viewClick(view)}>{view}</button>
      ))
    }
    </div>
    <div className="App">
      {views[selectedView]}
    </div>
  </>);
}

export default App;
