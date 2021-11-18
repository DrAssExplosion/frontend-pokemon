import { useState, useEffect } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export const AppInit = ({ setIsLoading }) => {


    useEffect(() => {
         
        setTimeout(() => {
            setIsLoading(true);
        }, 500);
    }, [])

    return (
        <Segment>
            <Dimmer active>
                <Loader />loader
            </Dimmer>
        </Segment>
    );
} 