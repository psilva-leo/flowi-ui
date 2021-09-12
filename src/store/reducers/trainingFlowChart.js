import {
    UPDATE_TRAINING_CHART,
    UPDATE_TRAINING_NODE,
  } from 'store/actions/trainingFlowChart'
  
  
const initialChart = {
    offset: {
        x: 6,
        y: 4
      },
      nodes: {
        '945a0b93-c8d9-4193-b1c6-69d4a58c6e10': {
          id: '945a0b93-c8d9-4193-b1c6-69d4a58c6e10',
          position: {
            x: 1577,
            y: 218
          },
          orientation: 0,
          type: 'Metrics',
          ports: {
            port1: {
              id: 'port1',
              type: 'left',
              position: {
                x: 0,
                y: 41
              }
            },
            port2: {
              id: 'port2',
              type: 'right',
              position: {
                x: 257,
                y: 41
              }
            }
          },
          properties: {
            name: 'Accuracy',
            'class': 'MetricsClassification',
            description: 'Compute accuracy score.',
            attributes: {
              target_column: 'class',
              normalize: 'true'
            }
          },
          size: {
            width: 257,
            height: 83
          }
        },
        '5001ad7a-3431-485d-933f-c82bdef09824': {
          id: '5001ad7a-3431-485d-933f-c82bdef09824',
          position: {
            x: 1896,
            y: 214
          },
          orientation: 0,
          type: 'Save',
          ports: {
            port1: {
              id: 'port1',
              type: 'left',
              position: {
                x: 0,
                y: 41
              }
            },
            port2: {
              id: 'port2',
              type: 'right',
              position: {
                x: 200,
                y: 41
              }
            }
          },
          properties: {
            name: 'SaveFile',
            'class': 'SaveLocal',
            description: 'Saves data to a file.',
            attributes: {
              label_column: 'class',
              save_label_column_only: 'false',
              file_name: 'temp',
              file_type: 'csv'
            }
          },
          size: {
            width: 200,
            height: 83
          }
        },
        '91dc65d6-2342-436e-a8a6-57369e9e850f': {
          id: '91dc65d6-2342-436e-a8a6-57369e9e850f',
          position: {
            x: 36,
            y: 117
          },
          orientation: 0,
          type: 'Load',
          ports: {
            port1: {
              id: 'port1',
              type: 'right',
              position: {
                x: 200,
                y: 41
              }
            }
          },
          properties: {
            name: 'LoadFile',
            'class': 'LoadLocal',
            description: 'Loads data from path and creates a dataframe.',
            output_policy: 'create',
            attributes: {
              train_path: 'iris.csv',
              test_path: '',
              file_type: 'csv',
              test_split: 0.2
            }
          },
          size: {
            width: 200,
            height: 83
          }
        },
        '1b1d542a-0e3d-4957-856a-2b97a3da1b4f': {
          id: '1b1d542a-0e3d-4957-856a-2b97a3da1b4f',
          position: {
            x: 36,
            y: 247
          },
          orientation: 0,
          type: 'Load',
          ports: {
            port1: {
              id: 'port1',
              type: 'right',
              position: {
                x: 200,
                y: 41
              }
            }
          },
          properties: {
            name: 'LoadFile',
            'class': 'LoadLocal',
            description: 'Loads data from path and creates a dataframe.',
            output_policy: 'create',
            attributes: {
              train_path: 'iris2.csv',
              test_path: '',
              file_type: 'csv',
              test_split: 0.2
            }
          },
          size: {
            width: 200,
            height: 83
          }
        },
        'd047a604-a720-404c-9424-ee67c1f871d9': {
          id: 'd047a604-a720-404c-9424-ee67c1f871d9',
          position: {
            x: 322,
            y: 175
          },
          orientation: 0,
          type: 'Label',
          ports: {
            port1: {
              id: 'port1',
              type: 'left',
              position: {
                x: 0,
                y: 41
              }
            },
            port2: {
              id: 'port2',
              type: 'right',
              position: {
                x: 229,
                y: 41
              }
            }
          },
          properties: {
            name: 'LabelEncoder',
            'class': 'Label',
            description: 'Encode labels to numeric value.',
            attributes: {
              target_column: 'class'
            }
          },
          size: {
            width: 229,
            height: 83
          }
        },
        '1d005a62-8031-468a-bd6f-d4a5512ccaf8': {
          id: '1d005a62-8031-468a-bd6f-d4a5512ccaf8',
          position: {
            x: 594,
            y: 173
          },
          orientation: 0,
          type: 'Preprocessing',
          ports: {
            port1: {
              id: 'port1',
              type: 'left',
              position: {
                x: 0,
                y: 41
              }
            },
            port2: {
              id: 'port2',
              type: 'right',
              position: {
                x: 283,
                y: 41
              }
            }
          },
          properties: {
            name: 'Fillna',
            'class': 'PreprocessingDataframe',
            description: 'Fill NA/NaN values using the specified method. If both columns and exclude columns are empty, transformation is applied for all columns.',
            attributes: {
              columns: '',
              exclude_columns: '',
              missing_values: 'nan',
              strategy: [
                'mean',
                'median'
              ],
              fill_value: '0'
            }
          },
          size: {
            width: 283,
            height: 83
          }
        },
        '08072918-acc7-4004-b448-54a6988c656f': {
          id: '08072918-acc7-4004-b448-54a6988c656f',
          position: {
            x: 933,
            y: 176
          },
          orientation: 0,
          type: 'Preprocessing',
          ports: {
            port1: {
              id: 'port1',
              type: 'left',
              position: {
                x: 0,
                y: 41
              }
            },
            port2: {
              id: 'port2',
              type: 'right',
              position: {
                x: 283,
                y: 41
              }
            }
          },
          properties: {
            name: 'StandardScaler',
            'class': 'PreprocessingDataframe',
            description: 'Standardize features by removing the mean and scaling to unit variance. If both columns and exclude columns are empty, transformation is applied for all columns.',
            attributes: {
              columns: '',
              exclude_columns: '',
              with_mean: 'true',
              with_std: 'false'
            }
          },
          size: {
            width: 283,
            height: 83
          }
        },
        '97324e19-ea21-42a7-b82e-fc0709e834fa': {
          id: '97324e19-ea21-42a7-b82e-fc0709e834fa',
          position: {
            x: 1285,
            y: 126
          },
          orientation: 0,
          type: 'Models',
          ports: {
            port1: {
              id: 'port1',
              type: 'left',
              position: {
                x: 0,
                y: 41
              }
            },
            port2: {
              id: 'port2',
              type: 'right',
              position: {
                x: 200,
                y: 41
              }
            }
          },
          properties: {
            name: 'SVC',
            'class': 'Classification',
            description: 'C-Support Vector Classification.',
            attributes: {
              target_column: 'class',
              C: 1,
              kernel: 'rbf',
              degree: 3,
              gamma: 'scale',
              coef0: 0,
              shrinking: 'true',
              probability: 'false',
              tol: 0.001,
              cache_size: 200,
              class_weight: 'none',
              max_iter: -1,
              decision_function_shape: 'ovr',
              break_ties: 'false'
            }
          },
          size: {
            width: 200,
            height: 83
          }
        },
        'cb9c7a55-2bb1-4151-9d7f-aeea92148be5': {
          id: 'cb9c7a55-2bb1-4151-9d7f-aeea92148be5',
          position: {
            x: 1251,
            y: 269
          },
          orientation: 0,
          type: 'Models',
          ports: {
            port1: {
              id: 'port1',
              type: 'left',
              position: {
                x: 0,
                y: 41
              }
            },
            port2: {
              id: 'port2',
              type: 'right',
              position: {
                x: 200,
                y: 41
              }
            }
          },
          properties: {
            name: 'SVC',
            'class': 'Classification',
            description: 'C-Support Vector Classification.',
            attributes: {
              target_column: 'class',
              C: [
                '12'
              ],
              kernel: 'rbf',
              degree: 3,
              gamma: 'scale',
              coef0: 0,
              shrinking: 'true',
              probability: 'false',
              tol: 0.001,
              cache_size: 200,
              class_weight: 'none',
              max_iter: -1,
              decision_function_shape: 'ovr',
              break_ties: 'false'
            }
          },
          size: {
            width: 200,
            height: 83
          }
        }
      },
      links: {
        '19cdc2f7-0062-4740-93ba-d3403a08b35b': {
          id: '19cdc2f7-0062-4740-93ba-d3403a08b35b',
          from: {
            nodeId: '91dc65d6-2342-436e-a8a6-57369e9e850f',
            portId: 'port1'
          },
          to: {
            nodeId: 'd047a604-a720-404c-9424-ee67c1f871d9',
            portId: 'port1'
          }
        },
        'b10d6106-66da-497a-8b32-5957817c0eef': {
          id: 'b10d6106-66da-497a-8b32-5957817c0eef',
          from: {
            nodeId: '1b1d542a-0e3d-4957-856a-2b97a3da1b4f',
            portId: 'port1'
          },
          to: {
            nodeId: 'd047a604-a720-404c-9424-ee67c1f871d9',
            portId: 'port1'
          }
        },
        'd471373e-eb9c-4bb2-9077-d8ec95d20da6': {
          id: 'd471373e-eb9c-4bb2-9077-d8ec95d20da6',
          from: {
            nodeId: 'd047a604-a720-404c-9424-ee67c1f871d9',
            portId: 'port2'
          },
          to: {
            nodeId: '1d005a62-8031-468a-bd6f-d4a5512ccaf8',
            portId: 'port1'
          }
        },
        '129339ea-538b-4d62-b461-2b793a5636f9': {
          id: '129339ea-538b-4d62-b461-2b793a5636f9',
          from: {
            nodeId: '1d005a62-8031-468a-bd6f-d4a5512ccaf8',
            portId: 'port2'
          },
          to: {
            nodeId: '08072918-acc7-4004-b448-54a6988c656f',
            portId: 'port1'
          }
        },
        'c0f48f4f-be3a-4e94-baee-c1b13926921a': {
          id: 'c0f48f4f-be3a-4e94-baee-c1b13926921a',
          from: {
            nodeId: '08072918-acc7-4004-b448-54a6988c656f',
            portId: 'port2'
          },
          to: {
            nodeId: '97324e19-ea21-42a7-b82e-fc0709e834fa',
            portId: 'port1'
          }
        },
        'c3ad916d-f065-4261-ac46-4f2d38e3225f': {
          id: 'c3ad916d-f065-4261-ac46-4f2d38e3225f',
          from: {
            nodeId: '08072918-acc7-4004-b448-54a6988c656f',
            portId: 'port2'
          },
          to: {
            nodeId: 'cb9c7a55-2bb1-4151-9d7f-aeea92148be5',
            portId: 'port1'
          }
        },
        '894c67a3-f574-4fb8-a31e-9f95f58521c5': {
          id: '894c67a3-f574-4fb8-a31e-9f95f58521c5',
          from: {
            nodeId: '97324e19-ea21-42a7-b82e-fc0709e834fa',
            portId: 'port2'
          },
          to: {
            nodeId: '945a0b93-c8d9-4193-b1c6-69d4a58c6e10',
            portId: 'port1'
          }
        },
        '0a59a893-1492-454e-9d31-925c934e91a9': {
          id: '0a59a893-1492-454e-9d31-925c934e91a9',
          from: {
            nodeId: 'cb9c7a55-2bb1-4151-9d7f-aeea92148be5',
            portId: 'port2'
          },
          to: {
            nodeId: '945a0b93-c8d9-4193-b1c6-69d4a58c6e10',
            portId: 'port1'
          }
        },
        'a2af5387-7756-4737-83e9-a1bb5a9cadc3': {
          id: 'a2af5387-7756-4737-83e9-a1bb5a9cadc3',
          from: {
            nodeId: '945a0b93-c8d9-4193-b1c6-69d4a58c6e10',
            portId: 'port2'
          },
          to: {
            nodeId: '5001ad7a-3431-485d-933f-c82bdef09824',
            portId: 'port1'
          }
        }
      },
      selected: {},
      hovered: {}
};
  
function trainingFlowChart(state = initialChart, action) {
    switch (action.type) {
        case UPDATE_TRAINING_CHART:
            return Object.assign({}, action.chart);
        case UPDATE_TRAINING_NODE:      
            const newNode = action.node
            return {
                ...state,
                nodes: {
                ...state.nodes,
                [newNode.id]: newNode
                }
            };
        default:
            return state
    }
}

export default trainingFlowChart;