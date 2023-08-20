import React, {
    useEffect,
    useState
} from 'react';

import './RoundedCheckbox.css';
import { useTodoContext } from '../../store/TodoContext';


const RoundedCheckbox = ({ completed, title, titleId }) => {

    const [isChecked, setChecked] = useState(false);

    const { todoStatusUpdate } = useTodoContext();

    useEffect(() => {
        setChecked(completed);

    }, []);

    const handleChange = () => {

        setChecked(!isChecked);

        const data = {
            title: title,
            completed: !isChecked
        }

        todoStatusUpdate(titleId, data);
    }

    return (
        <React.Fragment>
            <label className="rounded-checkbox">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                />
                <div className={`checkbox-custom${isChecked ? ' checked' : ''}`}>
                    {isChecked && <svg
                        className="checkmark"
                        viewBox="0 0 24 24"
                    ><path d="M20 6L9 17l-5-5" /></svg>}
                </div>
            </label>
        </React.Fragment>
    );
};

export default RoundedCheckbox;
