exports.evaluateExpression = (rule) => {
    // ***  PATTERN ***
    // rule:{
    //     'var':'extCustIdDSProviderOutput.ownerName'
    //   }
    // console.log(rule);
    if (Object.keys(rule).includes('num')) {
        // console.log(rule['num']);
        return rule['num']
    } else if (Object.keys(rule).includes('var')) {
        if (rule['var'].length = 1) {
            return (rule['var']);
        } else if (rule['var'].length = 1) {
            return (rule['var']);
        }
    }
}
exports.evaluateRule = (rule) => {
    let output = ``
    Object.keys(rule).map((r, index) => {
        if (r == '==') {
            // ***  PATTERN ***
            // rule:{
            //     '==':[{'var':'state.tafScope'},3]
            //   }
            oprnd1 = rule[r][0]
            oprnd2 = rule[r][1]

            if (typeof oprnd1 == 'number') {
            } else if (typeof oprnd1 == 'object') {
                oprnd1 = this.evaluateExpression(oprnd1);
            }
            if (typeof oprnd2 == 'number') {
            } else if (typeof oprnd2 == 'object') {
                oprnd2 = this.evaluateExpression(oprnd2);
            }
            output = oprnd1 + ' == ' + oprnd2
        } else if (r == '!=') {
            // ***  PATTERN ***
            // rule:{
            //     '!=':[{'var':'state.tafScope'},3]
            //   }
            oprnd1 = rule[r][0]
            oprnd2 = rule[r][1]

            if (typeof oprnd1 == 'number') {
            } else if (typeof oprnd1 == 'object') {
                oprnd1 = this.evaluateExpression(oprnd1);
            }
            if (typeof oprnd2 == 'number') {
            } else if (typeof oprnd2 == 'object') {
                oprnd2 = this.evaluateExpression(oprnd2);
            }
            output = oprnd1 + ' != ' + oprnd2
        } else if (r == 'includes') {
            // in case 'var' is of Array type
            // ***  PATTERN ***
            // rule:{
            //   {'includes':[{'var':'state.sendMethod'},0]},
            // }
            // console.log('**********');
            let oprnd1 = rule[r][0]
            let oprnd2 = rule[r][1]

            // console.log(this.evaluateExpression(oprnd2));

            output = 'typeof ' + this.evaluateExpression(oprnd1) + ' != \'undefined\' \&\& ' + this.evaluateExpression(oprnd1) + ' != \'\' \&\& ' + this.evaluateExpression(oprnd1) + '.includes(' + this.evaluateExpression(oprnd2) + ')'
        } else if (r == 'some') {
            // ***  PATTERN ***
            // rule:{
            //     'some':[
            //       {'var':'state.resourceAllocationMethod'},
            //       {"==":[{"var":""},0]}
            //     ]
            //   }

            let oprnd1 = rule[r][0]
            let oprnd2 = rule[r][1]

            output = 'Array.isArray(' + oprnd1['var'] + ') && ' + oprnd1['var'] + '.some( e => e ' + Object.keys(oprnd2)[0] + ' ' + oprnd2[Object.keys(oprnd2)[0]][1] + ' )';
        } else if (r == 'and') {
            // ***  PATTERN ***
            // rule:{
            //     'and':[
            //       {'!=':[{'var':'state.resourceAllocationMethod'},0]},
            //       {'==':[{'var':'state.calculateAVGMethod'},1]}
            //     ],
            // }   
            let oprnd1 = rule[r][0]
            let oprnd2 = rule[r][1]
            output = this.evaluateRule(oprnd1) + ' && ' + this.evaluateRule(oprnd2)
        } else if (r == 'or') {
            // ***  PATTERN ***
            // rule:{
            //     'or':[
            //       {'!=':[{'var':'state.resourceAllocationMethod'},0]},
            //       {'==':[{'var':'state.calculateAVGMethod'},1]}
            //     ],
            // }   
            let oprnd1 = rule[r][0]
            let oprnd2 = rule[r][1]
            output = this.evaluateRule(oprnd1) + ' || ' + this.evaluateRule(oprnd2)
        } else if (r == 'concat') {
            // ***  PATTERN ***
            // rule:{
            //     'concat':[
            //       {'var':'fakeAuthProvider.userName'},
            //       {'var':'fakeAuthProvider.lastName'}
            //     ],
            // }   
            let oprnd1 = rule[r][0]
            let oprnd2 = rule[r][1]
            output = this.evaluateExpression(oprnd1) + ' + ' + this.evaluateExpression(oprnd2)
        }
    })
    return output
}

exports.isExpression = (rule) => {
    if (
        Object.keys(rule).includes('num')
        ||
        Object.keys(rule).includes('var')
    ) {
        return true
    } else {
        return false
    }
}
exports.isRule = (rule) => {
    if (
        Object.keys(rule).includes('==')
        ||
        Object.keys(rule).includes('!=')
        ||
        Object.keys(rule).includes('includes')
        ||
        Object.keys(rule).includes('some')
        ||
        Object.keys(rule).includes('and')
        ||
        Object.keys(rule).includes('or')
        ||
        Object.keys(rule).includes('concat')
    ) {
        return true
    } else {
        return false
    }
}

exports.apply = (rule, data) => {

}