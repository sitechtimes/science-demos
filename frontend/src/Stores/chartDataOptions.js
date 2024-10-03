import hundredYearReg from '@/data/pCO2Reg';

const setChartData = (currentYear, data) => { // move to store later with input options for current selected year & species data
    return { // either data variable has data points for all organisms, or we have an input varoab;e for each of the datasets
        datasets: [
            {
                label: 'Estimated CO2 Pressure',
                data: hundredYearReg(currentYear),
                fill: false,
                borderColor: '#00aaaa',
                tension: 0.4,
                borderWidth: 1,
                yAxisID: 'y1',
                pointRadius: 0
            },
            {
                label: 'Staghorn Coral',
                data: data,
                fill: false,
                borderColor: '#cc0234',
                tension: 0.4
            },
            {
                label: 'Stoplight parrotfish',
                data: data,
                fill: false,
                borderColor: '#0b0bce',
                tension: 0.4
            },
            {
                label: 'Long-spined sea urchin',
                data: data,
                fill: false,
                borderColor: '#ff48ff',
                tension: 0.4
            },
            {
                label: 'Boulder star coral',
                data: data,
                fill: false,
                borderColor: '#686868',
                tension: 0.4
            },
            /* {
                label: 'Queen angelfish',
                data: data,
                fill: false,
                borderColor: '#a348a3',
                tension: 0.4
            },
            {
                label: 'Hawksbill sea turtle',
                data: data,
                fill: false,
                borderColor: '#ff9a34',
                tension: 0.4
            },
            {
                label: 'Sponges',
                data: data,
                fill: false,
                borderColor: '#ffce9d',
                tension: 0.4
            },
            {
                label: 'Yellowtail snapper',
                data: data,
                fill: false,
                borderColor: '#ffce9d',
                tension: 0.4
            }, */
            {
                label: 'Red lionfish',
                data: data,
                fill: false,
                borderColor: '#ffce9d',
                tension: 0.4
            },
            {
                label: 'Algae',
                data: data,
                fill: false,
                borderColor: '#11cf70',
                tension: 0.4
            },
/*             {
                label: 'Nassau grouper',
                data: data,
                fill: false,
                borderColor: '#9d9d3c',
                tension: 0.4
            }, */
            {
                label: 'Crown-of-thorns starfish',
                data: data,
                fill: false,
                borderColor: '#cfcf6f',
                tension: 0.4
            }
        ]
    };
};

const axesLabels = {
    chartTitle: ['Percent of Population Remaining','Individuals of Population Remaining'],
    xAxis: ['Years', 'Years'],
    yAxis: ['Percent of Population Remaining', 'Individuals of Population Remaining'],
};

const setChartOptions = (chartTypeNum, doc) => { // return chart options
    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: { // it's possible to make it more minimalistic by having 1 button to disable/enable multiple datasets
                labels: {
                    color: doc.textColor
                },
                position: 'bottom'
            },
            title: {
                display: true,
                text: axesLabels.chartTitle[chartTypeNum],
                color: doc.textColor
            },
        },
        scales: {
            x: {
                type: 'linear',
                ticks: {
                    color: doc.textColorSecondary
                },
                grid: {
                    color: doc.surfaceBorder
                },
                title: {
                    display: true,
                    text: axesLabels.xAxis[chartTypeNum], // axes names
                    color: doc.textColor
                }
            },
            y: {
                ticks: {
                    color: doc.textColorSecondary
                },
                grid: {
                    color: doc.surfaceBorder
                },
                title: {
                    display: true,
                    text: axesLabels.yAxis[chartTypeNum],
                    color: doc.textColor
                },
                type: 'linear',
                position: 'left',
            },
            y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                    drawOnChartArea: false,
                    color: doc.surfaceBorder
                    },
                    ticks: {
                    color: doc.textColorSecondary
                    },
                    title: {
                        display: true,
                        text: 'CO₂ Pressure (µATM)',
                        color: doc.textColor
                    },
                },
        }
    };
    return chartOptions;
}

export {setChartData, setChartOptions};