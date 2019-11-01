import findAggregateSum from "./findAggregateSum";
import findAggregateAverage from "./findAggregateAverage";
import findMax from "./findMax";
import findMin from "./findMin";

const applyAggregateFunction = {
    sum: findAggregateSum,
    average: findAggregateAverage,
    max: findMax,
    min: findMin
};

export default applyAggregateFunction;