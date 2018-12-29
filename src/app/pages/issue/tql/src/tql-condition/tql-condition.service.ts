
import { Injectable } from '@angular/core';

@Injectable()
export class TqlConditionService {
  constructor() {

  }

  genRule(id, field, group, rules, input, type, operator, value) {
    const ret: any = {
      id: id,
      field: field,
      group: group,
      rules: rules,
      input: input,
      type: type,

      operator: operator,
      value: value,
    };

    if (group) {
      ret.condition = 'OR';
    }

    return ret;
  }

  genGroupRule(id, condition, rules) {
    const ret: any = {
      id: id,
      group: true,
      condition: condition,
      rules: rules,
    };

    return ret;
  }

  uiSelect(input) {
    return input == 'dropdown' || input == 'multi_select' || input == 'radio' || input == 'checkbox';
  }

  uiText(input) {
    return input == 'number' || input == 'text' || input == 'textarea' || input == 'richtext';
  }
  textOpt(input) {
    if (input == 'number') {
      return 'equal';
    } else if (input == 'text' || input == 'textarea' || input == 'richtext') {
      return 'contains';
    }
  }

  uiDatetime(input) {
    return input == 'date' || input == 'time' || input == 'datetime';
  }

  mutiVal(input) {
    return input == 'multi_select' || input == 'checkbox';
  }

}

