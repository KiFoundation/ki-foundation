import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Tooltip, Legend, Pie as P } from 'recharts';

export default class Chart extends Component {
    static defaultProps = {
        data: null,
        cx: '50%',
        cy: '50%',
        innerRadius: 0,
        outerRadius: '50%',
        dataKey: 'value',
        onClick: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {},
        onMouseEnter: () => {},
        onMouseLeave: () => {},
        containerHeight: '100%',
        containerWidth: '100%',
        paddingAngle: 0,
        tooltip: false,
        tooltipContent: null,
        label: false,
        legend: false,
        legendAlign: 'top',
        legendHeight: 36,
        legendContent: null
    }
    render() {
        const {
            data,
            cx,
            cy,
            innerRadius,
            outerRadius,
            dataKey,
            onClick,
            onMouseOver,
            onMouseOut,
            onMouseEnter,
            onMouseLeave,
            containerHeight,
            containerWidth,
            paddingAngle,
            tooltip,
            tooltipContent,
            label,
            legend,
            legendAlign,
            legendHeight,
            legendContent
        } = this.props;
        return (
            <ResponsiveContainer height={containerHeight} width={containerWidth}>
                <PieChart>
                    {tooltip && <Tooltip content={tooltipContent ? tooltipContent : null} /> || null}
                    {legend && <Legend verticalAlign={legendAlign} height={legendHeight} content={legendContent ? legendContent : null} /> || null}
                    <P
                        label={label}
                        data={data}
                        dataKey={dataKey}
                        cy={cy}
                        cx={cx}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        paddingAngle={paddingAngle}
                        onClick={onClick}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}