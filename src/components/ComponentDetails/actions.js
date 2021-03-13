import React from 'react';
import {
    FormGroup,
    Input,
    UncontrolledTooltip,
    Col
} from "reactstrap";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';


export const createField = (columnSize, name, tooltipDescription, input) => {
    let id = 'tooltip_' + Math.floor(9999 * Math.random()).toString();
    return (
      <>
      <Col lg={columnSize}>
          <FormGroup>
            <label
              className="form-control-label"
            >
              {name}
            </label>
            <i id={id} className="fas fa-info-circle float-right"/>
            <UncontrolledTooltip
              delay={0}
              placement="top"
              target={id}
            >
              {tooltipDescription}
            </UncontrolledTooltip>
            {input}
          </FormGroup>
        </Col>
      </>
    );
}


export const createText = (columnSize, name, tooltipDescription, callback, defaultValue) => {

  let input = (
    <>
      <Input className="form-control-alternative" type="text"
            defaultValue={defaultValue}
            onChange={(event) => callback(event)}
      />
    </>
  );

  return createField(columnSize, name, tooltipDescription, input);
}



export const createNumber = (columnSize, name, tooltipDescription, callback, defaultValue, max, min = 0, step = 1) => {

    let input = (
      <>
        <Input className="form-control-alternative" id="input-postal-code" type="number"
              min={min}
              max={max}
              defaultValue={defaultValue}
              step={step}
              onChange={(event) => callback(event)}
        />
      </>
    );

    return createField(columnSize, name, tooltipDescription, input);
}

export const createSelect = (columnSize, name, tooltipDescription, options, defaultValue, isCreatable, isSearchable, isMulti, callback) => {
  let newDefaultValue = undefined;
  [newDefaultValue, options] = getDefault(options, defaultValue, isMulti);


  let TagName = isCreatable ? CreatableSelect : Select;
      
  let input = (
    <>
    <TagName className="form-control-alternative" defaultValue={newDefaultValue} options={options} onChange={(event) => callback(event)}
            isSearchable={isSearchable}
            isMulti={isMulti}
            isClearable
    />
    </>
  );
    
  return createField(columnSize, name, tooltipDescription, input);
}

export const fillDefault = (self, defaultDict, nodeProperties) => {
  let newState = {};
  for (let [key, ] of Object.entries(defaultDict)) {
    if (key in nodeProperties) {
      newState[key] = nodeProperties[key];
    }
  }

  if (Object.keys(newState).length !== 0){
    self.setState(newState);
  }

}

function getObject(options, value){
  let res = null;

  options.forEach((entry) => {
    if (value === entry.value) {
      res = entry
      return false;
    }
  });

  return res;
}

export const getDefault = (options, values, isMulti) => {  
  if (values === null){
    return [null, options];
  }
  if (values.constructor !== Array) {
    values = [values];
  }

  let defaultValue = [];
  values.forEach((value) => {
    if (value === null) {
      return true;
    };

    let entry = getObject(options, value);
      if (entry !== null){
        defaultValue.push(entry);
      }
  });

  if (!isMulti) {
    return [defaultValue[0], options];
  }
  return [defaultValue, options];

}


export const stringListToDictList = (stringList) => {
  let dictList = [];
  if (stringList !== null) {
    stringList.forEach(element => {
      dictList.push({value: element, label: element});
    });
  }

  return dictList;
}