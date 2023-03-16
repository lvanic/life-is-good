import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import pravo from '../pravo.png'

export const CardInfo = (props) => {
    console.log(props.description);
    const [isHard, setHard] = useState(false);
    const [isOpen, setOpen] = useState(true);
    return (
        <Card className='w-75 border rounded mb-3 mt-3'>
            <Card.Body>
                <Card.Title className='display-6'>
                    {props.title}
                </Card.Title>
                <Card.Text className='d-flex justify-content-end align-items-center'>
                    <Card.Text className='mb-0 me-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                    </Card.Text>
                    <label className="switch">
                        <input type="checkbox" checked={isHard} onChange={() => { setHard(!isHard) }} />
                        <span className="slider round"></span>
                    </label>
                    <Card.Text className='mb-0 ms-1'>
                        <img alt="закон" src={pravo} style={{ width: '25px', height: '25px' }} />
                    </Card.Text>
                </Card.Text>
                <Card.Text className='d-flex justify-content-start'>
                    <Button variant="" id="dropdown-basic" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? 'Подробнее ↓' : 'Скрыть ↑'}
                    </Button>
                </Card.Text>

                <Card.Text style={{fontSize:'18px'}}>
                    <div className={isOpen ? 'close' : 'open'}>
                        {isHard ?
                            props.law.map((el, index) =>

                                <div className='mb-3'>
                                    {el}
                                    {
                                        index == props.law.length - 1 ?
                                            null
                                            :
                                            <div style={{ width: '100%', border: 'solid 1px', marginTop:'16px' }} />
                                    }
                                </div>
                            )
                            :
                            props.description.map((el, index) =>
                                <div className='mb-3'>
                                    {el}
                                    {
                                        index == props.description.length - 1 ?
                                            null
                                            :
                                            <div style={{ width: '100%', border: 'solid 1px', marginTop:'16px'}} />
                                    }
                                </div>
                            )
                        }
                    </div>
                </Card.Text>

            </Card.Body>

        </Card>
    )
}