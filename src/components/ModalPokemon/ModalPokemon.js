import { useState } from 'react'
import { Button, Image, Table, Modal } from 'semantic-ui-react'
import { CardPokemon } from '../CardPokemon/CardPokemon';


export const ModalPokemon = ({ dataPokemon }) => {

    const [open, setOpen] = useState(false);
    
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<CardPokemon openModal={setOpen} dataPokemon={dataPokemon} />}
        >
            <Modal.Header>{dataPokemon.name}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={dataPokemon.images.small} wrapped />
                <Modal.Description>
                    <Table basic='very'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell>Характеристика</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Уникальный ID</Table.Cell>
                                <Table.Cell>{dataPokemon?.id || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Уровень</Table.Cell>
                                <Table.Cell>{dataPokemon.level || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Редкость</Table.Cell>
                                <Table.Cell>{dataPokemon.rarity || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Слабость</Table.Cell>
                                <Table.Cell>{dataPokemon.name || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Атака</Table.Cell>
                                <Table.Cell>{dataPokemon?.attacks?.[0].name || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Описание атаки</Table.Cell>
                                <Table.Cell>{dataPokemon?.attacks?.[0].text || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Урон</Table.Cell>
                                <Table.Cell>{dataPokemon?.attacks?.[0].damage || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Здоровье</Table.Cell>
                                <Table.Cell>{dataPokemon.hp || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Тип</Table.Cell>
                                <Table.Cell>{dataPokemon?.types?.[0] || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Подтип</Table.Cell>
                                <Table.Cell>{dataPokemon?.subtypes?.[0] || 'Неопределено'}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Закрыть</Button>
            </Modal.Actions>
        </Modal>
    );
}