import findDifferentColumnValues from "../charts/findDifferentColumnValues";
import generateCombinations from "../charts/generateCombinations";
import _ from "lodash";


const findCommonValues = (data,firstColumn,secondColumn) => {

    const uniqueFirstColumnValues = Array
        .from([...new Set(data.map(row => row[firstColumn]))]);

    const combinations = generateCombinations(uniqueFirstColumnValues,5);

    const first = combinations[0];

    const asd = first
        .map(columnValue => findDifferentColumnValues(data,firstColumn,columnValue,secondColumn))
        .map(obj => obj.values);

    console.log(_.intersection(...asd));

    console.log(asd);

    const mappedValues = uniqueFirstColumnValues
        .map(columnValue => findDifferentColumnValues(data,firstColumn,columnValue,secondColumn));


    const a = _.chain(data)
        .intersectionBy('values')
        .value();

    console.log(a);
    if(uniqueFirstColumnValues.length < 3){
        return _.chain(data)
            .map(columnValue => findDifferentColumnValues(data,firstColumn,columnValue,secondColumn))
            .intersectionBy('columnValues')
    }

};

export default findCommonValues;