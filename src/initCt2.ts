// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Variables Pack
import { create } from 'zustand';

// ---------- import Local Tools
import { mapElements } from './tools/base/project/mapElements';
import * as functions from './tools/base/functions';
import * as Elements from './tools/base/Elements';
import * as customs from './tools/customs';
import { Project } from './tools/base/project';
import * as jsvals from './tools/base/jsvals';
import * as stls from './tools/base/stls';
import { tools } from './tools';

// ---------- set Temp Dev DataBase
import * as devDB from './devDB';
import { mock } from './devDB';

export const initCt2 = () => ({
  true: jsvals.j8({
    pass: {
      propertieValues: 'true',
    },
  }),
  all: jsvals.j8({
    pass: {
      propertieValues: {
        firebaseConfig: jsvals.j8({
          pass: {
            propertieValues: {
              apiKey: jsvals.j8({
                pass: {
                  propertieValues: 'AIzaSyBJ1MNdqlCOmPXK3taPtmuEJbsrmtiUDxU',
                },
              }),
              authDomain: jsvals.j8({
                pass: {
                  propertieValues: 'goodbike-cd338.firebaseapp.com',
                },
              }),
              projectId: jsvals.j8({
                pass: {
                  propertieValues: 'goodbike-cd338',
                },
              }),
              storageBucket: jsvals.j8({
                pass: {
                  propertieValues: 'goodbike-cd338.appspot.com',
                },
              }),
              messagingSenderId: jsvals.j8({
                pass: {
                  propertieValues: '177294326394',
                },
              }),
              appId: jsvals.j8({
                pass: {
                  propertieValues: '1:177294326394:web:00671a5c16846c33e499c3',
                },
              }),
            },
          },
        }),
        colors: jsvals.j8({
          pass: {
            propertieValues: {
              red: jsvals.j8({
                pass: {
                  propertieValues: 'red',
                },
              }),
              dark: jsvals.j8({
                pass: {
                  propertieValues: 'black',
                },
              }),
              white: jsvals.j8({
                pass: {
                  propertieValues: 'white',
                },
              }),
              ice: jsvals.j8({
                pass: {
                  propertieValues: '#f5f5f5',
                },
              }),
              deepPurple: jsvals.j8({
                pass: {
                  propertieValues: '#8A0154',
                },
              }),
              grey: jsvals.j8({
                pass: {
                  propertieValues: '#999999',
                },
              }),
              primary: jsvals.j8({
                pass: {
                  propertieValues: '#7C2355',
                },
              }),
              grey2: jsvals.j8({
                pass: {
                  propertieValues: '#333333',
                },
              }),
            },
          },
        }),
        textSizes: jsvals.j8({
          pass: {
            propertieValues: {
              small: jsvals.j8({
                pass: {
                  propertieValues: '12px',
                },
              }),
              medium: jsvals.j8({
                pass: {
                  propertieValues: '14px',
                },
              }),
              large: jsvals.j8({
                pass: {
                  propertieValues: '16px',
                },
              }),
              superLarge: jsvals.j8({
                pass: {
                  propertieValues: '18px',
                },
              }),
            },
          },
        }),
        user: jsvals.j8({
          pass: {
            propertieValues: {
              userImage: jsvals.j8({
                pass: {
                  propertieValues:
                    'https://lh3.googleusercontent.com/e6PBGAIgp4UBlNKZYqXl0LU1hM_j2YHgY-aJDHzvTMe0R7_dJ9WkwKYIymQNHlyQqhHgM0hY2cx8G7rXrYug6KFWAfEbFuvo6aI2he2HjTdok_4O87r0C4mGeAj3=e365-rj-l80-w260',
                },
              }),
              userName: jsvals.j8({
                pass: {
                  propertieValues: 'Paulo Antônio',
                },
              }),
              userEmail: jsvals.j8({
                pass: {
                  propertieValues: 'pauloantonio@gmail.com',
                },
              }),
            },
          },
        }),
        toggles: jsvals.j8({
          pass: {
            propertieValues: {
              sideMenu: jsvals.j8({
                pass: {
                  propertieValues: 'hide',
                },
              }),
              activeForm: jsvals.j8({
                pass: {
                  propertieValues: 'none',
                },
              }),
              rightOptions: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
            },
          },
        }),
      },
    },
  }),
  sc: jsvals.j8({
    pass: {
      propertieValues: {
        A1: jsvals.j8({
          pass: {
            propertieValues: {
              titleName: jsvals.j8({
                pass: {
                  propertieValues: 'Aluguel de Bicicletas',
                },
              }),
              login: jsvals.j8({
                pass: {
                  propertieValues: 'LOGIN',
                },
              }),
              password: jsvals.j8({
                pass: {
                  propertieValues: 'SENHA',
                },
              }),
              loginUsing: jsvals.j8({
                pass: {
                  propertieValues: 'Entrar usando sua conta...',
                },
              }),
              confirm: jsvals.j8({
                pass: {
                  propertieValues: 'Confirmar',
                },
              }),
              mockID: jsvals.j8({
                pass: {
                  propertieValues: 'AduXSCnqEOjhwPeplNnQ',
                },
              }),
            },
          },
        }),
        A2: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              mainList: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                    'no name': jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A3: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              forms: jsvals.j8({
                pass: {
                  propertieValues: {
                    iptsChanges: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                    editData: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A4: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              mainList: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                    'no name': jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A5: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              forms: jsvals.j8({
                pass: {
                  propertieValues: {
                    iptsChanges: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                    editData: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A6: jsvals.j8({
          pass: {
            propertieValues: {
              currData: jsvals.j8({
                pass: {
                  propertieValues: {
                    locationsList: jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
              lists: jsvals.j8({
                pass: {
                  propertieValues: {
                    mainList: jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
              toggles: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                  },
                },
              }),
              mainList: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                    'no name': jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A7: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              forms: jsvals.j8({
                pass: {
                  propertieValues: {
                    iptsChanges: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                    editData: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A8: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              mainList: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                    'no name': jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A9: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              forms: jsvals.j8({
                pass: {
                  propertieValues: {
                    iptsChanges: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                    editData: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A10: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              mainList: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                    'no name': jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
              toggles: jsvals.j8({
                pass: {
                  propertieValues: {
                    sideRight: jsvals.j8({
                      pass: {
                        propertieValues: {
                          show: jsvals.j8({
                            pass: {
                              propertieValues: 'false',
                            },
                          }),
                        },
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A11: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              forms: jsvals.j8({
                pass: {
                  propertieValues: {
                    iptsChanges: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                    editData: jsvals.j8({
                      pass: {
                        propertieValues: {},
                      },
                    }),
                  },
                },
              }),
              currData: jsvals.j8({
                pass: {
                  propertieValues: {
                    itemID: jsvals.j8({
                      pass: {
                        propertieValues: 'null',
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        A12: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              mainList: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                    'no name': jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
              locationDocID: jsvals.j8({
                pass: {
                  propertieValues: 'qVHXZnrzXrjSLVE9v7yY',
                },
              }),
              withDrawDocID: jsvals.j8({
                pass: {
                  propertieValues: 'J1gAxhWUATdeCj29HJMh',
                },
              }),
            },
          },
        }),
        A13: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              mainList: jsvals.j8({
                pass: {
                  propertieValues: {
                    show: jsvals.j8({
                      pass: {
                        propertieValues: 'false',
                      },
                    }),
                    'no name': jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        B2: jsvals.j8({
          pass: {
            propertieValues: {
              forms: jsvals.j8({
                pass: {
                  propertieValues: {
                    all: jsvals.j8({
                      pass: {
                        propertieValues: {
                          userData: jsvals.j8({
                            pass: {
                              propertieValues: {},
                            },
                          }),
                        },
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
        B4: jsvals.j8({
          pass: {
            propertieValues: {
              totalPurchase: jsvals.j8({
                pass: {
                  propertieValues: 'Total da Compra',
                },
              }),
              totalMoney: jsvals.j8({
                pass: {
                  propertieValues: 'R$40,00',
                },
              }),
            },
          },
        }),
        B3A: jsvals.j8({
          pass: {
            propertieValues: {
              state: jsvals.j8({
                pass: {
                  propertieValues: 'inactive',
                },
              }),
              currData: jsvals.j8({
                pass: {
                  propertieValues: {
                    mainList: jsvals.j8({
                      pass: {
                        propertieValues: [],
                      },
                    }),
                  },
                },
              }),
            },
          },
        }),
      },
    },
  }),
});
