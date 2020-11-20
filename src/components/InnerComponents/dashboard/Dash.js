import {Dashboard,Widget} from 'velocity-dashboard'

import 'velocity-dashboard/dist/dashboard.css';

const Dash = ()=>{
    return <div>
        <Dashboard className='example-dash' title='Dashboard Title' 
                config={ [
                    {
                        widgetId: 'weather',
                        instanceId: '1',
                        location: 'orl'
                    }
                ]} >
            {/* <Widget id='weather' contentComp={weatherWidget.Content} 
                configComp={weatherWidget.Config} previewComp={weatherWidget.Preview} /> */}
        
        </Dashboard>
    </div>
}

export default Dash;