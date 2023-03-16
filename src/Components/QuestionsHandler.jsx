import CardGroup from 'react-bootstrap/CardGroup';
import { CardInfo } from './CardInfo';
import { Questions } from '../Data/Questions';

export const QuestionsHandler = () => {
    return (
        <CardGroup style={{ alignItems: 'center' }} className='text-center d-flex flex-column justify-content-center w-100'>
            {
                Questions.map(el => (
                    <CardInfo title = {el.question} description={[...el.answerLite]} law={[...el.answerBig]}/>
                ))
            }

        </CardGroup>
    );
}