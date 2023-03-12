import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

export default function TodosActions() {
    return (
        <>
            <Button title="Reset Todos"><RiRefreshLine/></Button>
            <Button title="Clear Completed Todos"><RiDeleteBin2Line/></Button>
        </>
    );
}