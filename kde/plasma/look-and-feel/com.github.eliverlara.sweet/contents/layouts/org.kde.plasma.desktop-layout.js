var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Sweet/Sweet-space.png",
                    "SlidePaths": "/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1440x900": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "3",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "309"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Sweet/Sweet-space.png",
                    "SlidePaths": "/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "558",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "groupingStrategy": "0",
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "aliasFontSize": "35",
                            "enableLabelDropShadow": "true",
                            "temperatureRightMargin": "22"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "resources": "[{\"sourceName\":\"lmsensors/coretemp-isa-0000/Core_0\",\"alias\":\"CPU\",\"overrideLimitTemperatures\":false,\"warningTemperature\":70,\"meltdownTemperature\":90,\"virtual\":false,\"childSourceObjects\":{\"acpi/Thermal_Zone/0-x86_pkg_temp/Temperature\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_0\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_1\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_2\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_3\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Package_id_0\":{\"temperature\":0},\"nvidia-smi\":{\"temperature\":0},\"udisks/ADATA_SU800_2G4620100272\":{\"temperature\":0},\"udisks/ST1000DM010_2EP102_Z9AB4A3W\":{\"temperature\":0},\"udisks/ST31000524NS_9WK1ZBXL\":{\"temperature\":0},\"udisks/TSSTcorp_CDDVDW_SH____\":{\"temperature\":0}}},{\"sourceName\":\"nvidia-smi\",\"alias\":\"GPU\",\"overrideLimitTemperatures\":false,\"warningTemperature\":70,\"meltdownTemperature\":90,\"virtual\":false,\"childSourceObjects\":{\"acpi/Thermal_Zone/0-x86_pkg_temp/Temperature\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_0\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_1\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_2\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_3\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Package_id_0\":{\"temperature\":0},\"nvidia-smi\":{\"temperature\":0},\"udisks/ADATA_SU800_2G4620100272\":{\"temperature\":0},\"udisks/ST1000DM010_2EP102_Z9AB4A3W\":{\"temperature\":0},\"udisks/ST31000524NS_9WK1ZBXL\":{\"temperature\":0},\"udisks/TSSTcorp_CDDVDW_SH____\":{\"temperature\":0}}},{\"sourceName\":\"udisks/ADATA_SU800_2G4620100272\",\"alias\":\"SSD\",\"overrideLimitTemperatures\":false,\"warningTemperature\":70,\"meltdownTemperature\":90,\"virtual\":false,\"childSourceObjects\":{\"acpi/Thermal_Zone/0-x86_pkg_temp/Temperature\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_0\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_1\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_2\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Core_3\":{\"temperature\":0},\"lmsensors/coretemp-isa-0000/Package_id_0\":{\"temperature\":0},\"nvidia-smi\":{\"temperature\":0},\"udisks/ADATA_SU800_2G4620100272\":{\"temperature\":0},\"udisks/ST1000DM010_2EP102_Z9AB4A3W\":{\"temperature\":0},\"udisks/ST31000524NS_9WK1ZBXL\":{\"temperature\":0},\"udisks/TSSTcorp_CDDVDW_SH____\":{\"temperature\":0}}}]"
                        },
                        "/Configuration/Misc": {
                            "updateInterval": "5"
                        }
                    },
                    "plugin": "org.kde.thermalMonitor"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Agenda": {
                            "agendaShowEventHangoutLink": "false",
                            "agendaWeatherShowIcon": "false",
                            "agenda_weather_show_icon": "false"
                        },
                        "/Configuration/Calendar": {
                            "monthDayDoubleClick": "DoNothing"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "666",
                            "DialogWidth": "1280"
                        },
                        "/Configuration/General": {
                            "clockLine2HeightRatio": "0.36",
                            "clockShowLine2": "true",
                            "clockTimeFormat2": "dd.MM.yyyy",
                            "v71Migration": "true",
                            "v72Migration": "true",
                            "widgetShowAgenda": "false",
                            "widgetShowMeteogram": "false",
                            "widget_show_agenda": "false",
                            "widget_show_meteogram": "false"
                        },
                        "/Configuration/Google%20Calendar": {
                            "calendarList": "W10=",
                            "calendar_list": "W10=",
                            "tasklistList": "W10="
                        }
                    },
                    "plugin": "org.kde.plasma.eventcalendar"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2.2222222222222223,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "466",
                            "DialogWidth": "638"
                        },
                        "/Configuration/General": {
                            "showOnlyCurrentActivity": "false",
                            "showOnlyCurrentDesktop": "true",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "4",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1280"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "34"
                        },
                        "/Configuration/General": {
                            "length": "1354"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "26"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "groupingStrategy": "0",
                            "launchers": "",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "3",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1440"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2.2222222222222223,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 79.94444444444444,
            "minimumLength": 79.16666666666667,
            "offset": 0
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "2"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "groupingStrategy": "0",
                            "launchers": "",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "5",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1440"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "532",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "maxStripes": "1",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1280"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "launchers": "",
                            "showOnlyCurrentScreen": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "8",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1280"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
