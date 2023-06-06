import 'source-map-support/register';
import errorHandler from 'errorhandler';

import app from './server';

if (app.get('env') === 'development') {
    app.use(errorHandler());
}

const server = app.listen(app.get('port'), () => {
    console.log(
        'Home Rent App is running at :%d in %s mode',
        app.get('port'),
        app.get('env')
    );
});

export default server;
