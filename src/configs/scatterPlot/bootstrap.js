import trackChartStateHoc from "../../components/visualization/trackChartState";
import scatterPlotPresenter from "../../components/scatterPlot/scatterPlotPresenter";

const ScatterPlot = trackChartStateHoc('firstColumnValue','secondColumnValue','thirdColumnValue')
                                      (scatterPlotPresenter);

export default ScatterPlot;