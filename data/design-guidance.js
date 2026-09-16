/* Legacy design guidance. No approved coefficient/code source supplied. */
(function(root){
const frictionTable = [
    { D: 100, vals: [0.730, 1.507, 2.537, 3.813, 5.332, 7.092, 9.091, 11.327, 13.799] },
    { D: 150, vals: [0.436, 0.904, 1.525, 2.295, 3.213, 4.277, 5.486, 6.838, 8.335] },
    { D: 200, vals: [0.304, 0.631, 1.066, 1.606, 2.250, 2.997, 3.845, 4.794, 5.845] },
    { D: 250, vals: [0.230, 0.478, 0.809, 1.220, 1.709, 2.277, 2.923, 3.646, 4.445] },
    { D: 300, vals: [0.183, 0.382, 0.646, 0.975, 1.367, 1.822, 2.339, 2.918, 3.558] },
    { D: 350, vals: [0.151, 0.316, 0.535, 0.807, 1.132, 1.509, 1.938, 2.418, 2.949] },
    { D: 400, vals: [0.128, 0.268, 0.454, 0.686, 0.962, 1.283, 1.648, 2.056, 2.508] },
    { D: 450, vals: [0.111, 0.232, 0.393, 0.594, 0.834, 1.112, 1.428, 1.783, 2.175] },
    { D: 500, vals: [0.097, 0.204, 0.346, 0.523, 0.734, 0.979, 1.257, 1.569, 1.915] }
];

const velocities = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const Kvalues = {
    GI_PI: { '90_short': 1.0, '90_long': 0.4, '45_short': 0.9, '45_long': 0.4 },
    flex: { '90_short': 1.3, '90_long': 0.6, '45_short': 1.1, '45_long': 0.5 }
};


// Airflow Calculator JavaScript

// Room ACH Data
const roomACH = {
    "Basements": [3, 4],
    "Bathrooms": [6, 7],
    "Bedrooms": [5, 6],
    "Kitchens": [7, 8],
    "Laundry": [8, 9],
    "Living": [6, 8],
    "Offices": [6, 8],
    "Conference": [8, 12],
    "Server": [10, 14],
    "Break": [7, 8],
    "Retail": [6, 10],
    "Restaurant": [8, 10],
    "CommercialKitchen": [14, 18],
    "PublicRestrooms": [10, 12],
    "Auditorium": [12, 14]
};


root.ProdigyGuidance={status:"pending_review",source:"Legacy repository f4205e13f04d98d9274868a314c8257d04dca6ef; engineering source/edition not supplied",frictionTable,velocities,Kvalues,roomACH,density:1.2};
})(typeof window!=="undefined"?window:globalThis);
