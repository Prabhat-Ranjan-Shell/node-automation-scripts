const data = {
    "filters": [
        {
            "type": "odataFilters",
            "filters": [
                {
                    "tabname": "lithology",
                    "options": {
                        "name": "Clastic",
                        "options": [
                            "Breccia",
                            "Conglomerate",
                            "Sandstone",
                            "Siltstone",
                            "Clastic - undiff"
                        ]
                    },
                    "isSpecific": true,
                    "title": "What is your main reservoir lithology?"
                },
                {
                    "tabname": "depositionalEnv",
                    "options": {
                        "name": "Transitional",
                        "image": "/staticfiles/questionnaire/media/depositional_environment_transitional.svg",
                        "nlimage": "/staticfiles/questionnaire/media/depositional_environment_transitional_nl.svg",
                        "options": [
                            "Delta",
                            "Fluvial",
                            "Open",
                            "Open - Protected",
                            "Protected",
                            "Shelf",
                            "Tidal",
                            "Transitional - undiff"
                        ]
                    },
                    "isSpecific": true,
                    "title": "What are the most likely environments of deposition in your area of interest?"
                },
                {
                    "tabname": "geologicalAge",
                    "options": {
                        "min": 0,
                        "max": 541
                    },
                    "title": "Do you want to focus on a stratigraphic period?"
                }
            ]
        },
        {
            "type": "spotfireFilters",
            "filters": [
                {
                    "filteringSchemeName": "Filtering scheme",
                    "dataTableName": "ViewQuandaAnalogue",
                    "dataColumnName": "Location",
                    "filterType": "CheckBoxFilter",
                    "filterSettings": {
                        "values": [
                            "Offshore",
                            "Onshore",
                            "Onshore/Offshore"
                        ],
                        "lowValue": null,
                        "highValue": null,
                        "includeEmpty": true,
                        "searchPattern": null,
                        "hierarchyPaths": []
                    }
                },
                {
                    "filteringSchemeName": "Filtering scheme",
                    "dataTableName": "ViewQuandaAnalogue",
                    "dataColumnName": "Net to Gross Ratio (ratio)",
                    "filterType": "RangeFilter",
                    "filterSettings": {
                        "values": [],
                        "lowValue": "0.00",
                        "highValue": "0.89",
                        "includeEmpty": true,
                        "searchPattern": null,
                        "hierarchyPaths": []
                    }
                },
                {
                    "filteringSchemeName": "Filtering scheme",
                    "dataTableName": "ViewQuandaAnalogue",
                    "dataColumnName": "Gross Thickness Average (m)",
                    "filterType": "RangeFilter",
                    "filterSettings": {
                        "values": [],
                        "lowValue": "0.00",
                        "highValue": "3723.06",
                        "includeEmpty": true,
                        "searchPattern": null,
                        "hierarchyPaths": []
                    }
                },
                {
                    "filteringSchemeName": "Filtering scheme",
                    "dataTableName": "ViewQuandaAnalogue",
                    "dataColumnName": "Temperature Original (deg C)",
                    "filterType": "RangeFilter",
                    "filterSettings": {
                        "values": [],
                        "lowValue": "32.22",
                        "highValue": "246.24",
                        "includeEmpty": true,
                        "searchPattern": null,
                        "hierarchyPaths": []
                    }
                },
                {
                    "filteringSchemeName": "Filtering scheme",
                    "dataTableName": "ViewQuandaAnalogue",
                    "dataColumnName": "Depth TVDSS (m)",
                    "filterType": "RangeFilter",
                    "filterSettings": {
                        "values": [],
                        "lowValue": "-11433.00",
                        "highValue": "4560.26",
                        "includeEmpty": true,
                        "searchPattern": null,
                        "hierarchyPaths": []
                    }
                },
                {
                    "filteringSchemeName": "Filtering scheme",
                    "dataTableName": "ViewQuandaAnalogue",
                    "dataColumnName": "Initial Gas to Oil Ratio (scf/stb)",
                    "filterType": "RangeFilter",
                    "filterSettings": {
                        "values": [],
                        "lowValue": "0.00",
                        "highValue": "25181.21",
                        "includeEmpty": true,
                        "searchPattern": null,
                        "hierarchyPaths": []
                    }
                }
            ]
        }
    ]
}

const filterData = () => {
    const d = data.filters;
    const filteredData = [];

    d.forEach((item, i) => {
        if (item.type === 'odataFilters') {
            filteredData.push({ type: "odataFilters", "filters": [] })
            filteredData[i].filters.push(item?.filters?.map(it => ({
                tabname: it.tabname || '',
                name: it?.options?.name || '',
                title: it.title || ''
            })));
        }
        if (item.type === 'spotfireFilters') {
            filteredData.push({ type: "spotfireFilters", "filters": [] })
            filteredData[i].filters.push(item?.filters?.map(it => ({
                dataColumnName: it.dataColumnName || '',
                values: it.filterSettings.values || []
            })));
        }
    });

    return filteredData;
}

console.log("---------------", JSON.stringify(filterData()));