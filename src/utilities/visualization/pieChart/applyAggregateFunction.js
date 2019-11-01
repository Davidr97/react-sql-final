import findMax from "./findMax";
import findMin from "./findMin";
import findAggregateAverage from "./findAggregateAverage";
import findAggregateSum from "./findAggregateSum";

const applyAggregateFunction = {
    sum: findAggregateSum,
    average: findAggregateAverage,
    max: findMax,
    min: findMin
};

export default applyAggregateFunction;