import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import ErrorMessage from 'components/errorMessage/errorMessage';
import OutsideAlerter from 'components/outsideAlerter/outsideAlerter';
import Label from 'components/label/label';

import styles from './select.scss';

/**
 * @description Custom Select Component
 * @param props
 * @returns a custom select component using ul li with event handlers
 */
function Select(props) {

    // attributes
    const { name, label, value, options, required, placeholder, touched, disabled, selectSingleOptionByDefaultEnabled } = props;
    // error props
    const { errors, showAllErrors, errorClass, invalidFieldClass } = props;
    // event handlers
    const { onChange, onBlur } = props;
    // classes
    const { selectWrapperClass, selectContainerClass, selectClass, optionContainerClass, optionClass, selectedOptionClass, variant } = props;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(!disabled && selectSingleOptionByDefaultEnabled && options && options.length===1) {
            onChange(options[0]);
        }
    }, [options?.[0]?.displayName, options?.[0]?.key, disabled, selectSingleOptionByDefaultEnabled])

    const isSelected = () => value && Object.keys(value).length>0;

    const isOptionSelected = (option) => {
        return JSON.stringify(option) === JSON.stringify(value);
    }

    const handleClickOnSelect = () => {
        if(!disabled) {
            setIsOpen(isOpen => !isOpen);
            onBlur();
        }
    }

    const handleClickOnOption = (e,option) => {
        setIsOpen(false)
        onChange(option);
        e.stopPropagation();
    }

    const getSelectedOption = () => {
        if(value && Object.keys(value).length>0) {
            return <span className={styles.span}>{value.displayName}</span>
        } else {
            return <span className={styles.placeholder}>{placeholder}</span>;
        }
    }

    const renderOption = (option) => {
        const {key, displayName} = option;
        return (
            <li key={key} className={`${optionClass} ${isOptionSelected(option) ? selectedOptionClass : ""}`} onClick={(e) => handleClickOnOption(e,option)}>{displayName}</li>
        )
    }

    const renderSelect = (invalidFieldClass) => {
        return (
            <OutsideAlerter onOutsideClick={() => setIsOpen(false)}>
                <div onClick={handleClickOnSelect} className={`${selectContainerClass} ${styles[variant]} ${invalidFieldClass}`}>
                    <React.Fragment>
                        <div key={name} className={`${selectClass} ${invalidFieldClass}`}>
                            {getSelectedOption()}
                        </div>
                        {
                            isOpen &&
                            <ul className={optionContainerClass}>{options && options.map(renderOption)}</ul>
                        }
                    </React.Fragment>
                    <Label labelName={required ? label:`${label} (optional)`} labelClass={`${styles.label} ${isSelected() ? styles.labelUp: ""} `}/>
                </div>
            </OutsideAlerter>
        )
    }

    return (
        <div className={selectWrapperClass}>
            <ErrorMessage 
                {...{errors, showAllErrors, errorClass, invalidFieldClass}} 
                isErrorVisible={touched}
                renderChildren={renderSelect}
            />
        </div>
    )
}

Select.defaultProps = {
    required: false,
    disabled: false,
    selectSingleOptionByDefaultEnabled: false,
    placeholder: "Select an option",
    selectWrapperClass: styles.selectWrapper,
    selectClass: styles.select,
    selectContainerClass: styles.selectContainer,
    optionClass: styles.option,
    selectedOptionClass: "_form_select_option_selected_control_",
    optionContainerClass: styles.optionList,
    invalidFieldClass: styles.error,
    errorClass: styles.selectErrorContainer,
    onBlur: () => {},
    variant: ""
}

Select.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).required,
    options: PropTypes.array,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    touched: PropTypes.bool,
    disabled: PropTypes.bool,
    selectSingleOptionByDefaultEnabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    selectWrapperClass: PropTypes.string,
    selectClass: PropTypes.string,
    selectContainerClass: PropTypes.string,
    optionClass: PropTypes.string,
    selectedOptionClass: PropTypes.string,
    optionContainerClass: PropTypes.string,
    errors: PropTypes.array,
    showAllErrors: PropTypes.bool,
    errorClass: PropTypes.string,
    invalidFieldClass: PropTypes.string,
    variant: PropTypes.string
}

export default Select
