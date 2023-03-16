import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
export const MainPage = () => {
    const navigator = useNavigate();
    return (
        <Card style={{ margin: 'auto' }} className="text-center w-75 p-3 border-0 bg-danger gradient" >
            <Card.Body className="border-0">
                <Card.Text className='text-center my-4'>
                    <strong className='display-4' style={{ fontWeight: '800', zIndex:'5', position:'relative' }}>
                        <b>
                            Проблемы в семье – куда обращаться?
                            В таких ситуациях кажется, что ситуация безвыходная и
                            помочь некому <br />
                            <a style={{ color: '#dc3545' }}> ПОМНИТЕ </a>– выход есть всегда!
                        </b>
                    </strong>
                </Card.Text>
                <Button size='lg' style={{ scale: '1.5' }} className='mt-5' variant="danger" onClick={() => navigator('/questions')}>
                    Найти помощь
                </Button>
            </Card.Body>
        </Card>
    )
}