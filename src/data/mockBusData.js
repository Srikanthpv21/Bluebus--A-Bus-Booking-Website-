// Comprehensive Indian City Directory & Route Stations (30+ Major Cities)
export const POPULAR_CITIES = [
  { id: 'blr', name: 'Bangalore', state: 'Karnataka', terminal: 'Kempegowda Bus Station (Majestic)' },
  { id: 'hyd', name: 'Hyderabad', state: 'Telangana', terminal: 'Mahatma Gandhi Bus Station (MGBS)' },
  { id: 'mum', name: 'Mumbai', state: 'Maharashtra', terminal: 'Dadar Asiad / Borivali West' },
  { id: 'pun', name: 'Pune', state: 'Maharashtra', terminal: 'Swargate Bus Station / Wakad' },
  { id: 'che', name: 'Chennai', state: 'Tamil Nadu', terminal: 'Chennai Mofussil Bus Terminus (CMBT)' },
  { id: 'del', name: 'Delhi', state: 'Delhi NCR', terminal: 'Kashmere Gate ISBT / Anand Vihar' },
  { id: 'jai', name: 'Jaipur', state: 'Rajasthan', terminal: 'Sindhi Camp Central Bus Station' },
  { id: 'goa', name: 'Goa', state: 'Goa', terminal: 'Panaji KTC Bus Stand / Mapusa' },
  { id: 'ahm', name: 'Ahmedabad', state: 'Gujarat', terminal: 'Geeta Mandir Central Bus Stand' },
  { id: 'sur', name: 'Surat', state: 'Gujarat', terminal: 'Central Bus Terminal / Kamrej' },
  { id: 'kol', name: 'Kolkata', state: 'West Bengal', terminal: 'Esplanade / Babughat Bus Terminus' },
  { id: 'mys', name: 'Mysore', state: 'Karnataka', terminal: 'Suburban Central Bus Stand' },
  { id: 'man', name: 'Mangalore', state: 'Karnataka', terminal: 'KSRTC Bejai Bus Station' },
  { id: 'coi', name: 'Coimbatore', state: 'Tamil Nadu', terminal: 'Gandhipuram Central Bus Stand' },
  { id: 'mad', name: 'Madurai', state: 'Tamil Nadu', terminal: 'Mattuthavani Integrated Bus Terminal' },
  { id: 'koc', name: 'Kochi', state: 'Kerala', terminal: 'Vyttila Mobility Hub' },
  { id: 'tri', name: 'Trivandrum', state: 'Kerala', terminal: 'Thampanoor Central Bus Station' },
  { id: 'vij', name: 'Vijayawada', state: 'Andhra Pradesh', terminal: 'Pandit Nehru Bus Station (PNBS)' },
  { id: 'vis', name: 'Visakhapatnam', state: 'Andhra Pradesh', terminal: 'Dwaraka Bus Station (RTC Complex)' },
  { id: 'tir', name: 'Tirupati', state: 'Andhra Pradesh', terminal: 'Central Bus Stand / Alipiri' },
  { id: 'cha', name: 'Chandigarh', state: 'Punjab / Haryana', terminal: 'ISBT Sector 43 / Sector 17' },
  { id: 'deh', name: 'Dehradun', state: 'Uttarakhand', terminal: 'ISBT Haridwar Bypass' },
  { id: 'mnl', name: 'Manali', state: 'Himachal Pradesh', terminal: 'Private Bus Stand Mall Road' },
  { id: 'shm', name: 'Shimla', state: 'Himachal Pradesh', terminal: 'ISBT Tutikandi' },
  { id: 'luc', name: 'Lucknow', state: 'Uttar Pradesh', terminal: 'Alambagh ISBT / Charbagh' },
  { id: 'var', name: 'Varanasi', state: 'Uttar Pradesh', terminal: 'Cantt Bus Station' },
  { id: 'agr', name: 'Agra', state: 'Uttar Pradesh', terminal: 'ISBT Idgah / Transport Nagar' },
  { id: 'ind', name: 'Indore', state: 'Madhya Pradesh', terminal: 'Sarwate Bus Stand / Vijay Nagar' },
  { id: 'bho', name: 'Bhopal', state: 'Madhya Pradesh', terminal: 'ISBT Habibganj / Nadra' },
  { id: 'nag', name: 'Nagpur', state: 'Maharashtra', terminal: 'Ganeshpeth Central Bus Station' },
  { id: 'vad', name: 'Vadodara', state: 'Gujarat', terminal: 'Central Bus Station (Pandya Bridge)' },
  { id: 'nas', name: 'Nashik', state: 'Maharashtra', terminal: 'Thakkar Bazaar / Dwarka Circle' },
  { id: 'shi', name: 'Shirdi', state: 'Maharashtra', terminal: 'Shirdi Central Stand / Gate 2' },
  { id: 'pon', name: 'Pondicherry', state: 'Puducherry', terminal: 'New Bus Stand (Maraimalai Adigal)' }
];

export const CITY_BOARDING_POINTS = {
  'Bangalore': [
    { id: 'blr-bp1', name: 'Majestic (Kempegowda Bus Station)', timeOffsetMinutes: 0, landmark: 'Opp. Railway Station, Platform 12' },
    { id: 'blr-bp2', name: 'Shantinagar Bus Station', timeOffsetMinutes: 20, landmark: 'KSRTC In-Gate, Double Road' },
    { id: 'blr-bp3', name: 'Madiwala (Near Police Station)', timeOffsetMinutes: 45, landmark: 'Opp. Total Mall / Venkateshwara Theatre' },
    { id: 'blr-bp4', name: 'Silk Board Junction', timeOffsetMinutes: 60, landmark: 'Skywalk Pillar #48, Hosur Road' },
    { id: 'blr-bp5', name: 'Electronic City Toll Gate', timeOffsetMinutes: 85, landmark: 'Infosys Gate 1, Elevated Flyover' },
    { id: 'blr-bp6', name: 'Hebbal Esteem Mall', timeOffsetMinutes: 30, landmark: 'Service Road, Near Bus Bay' }
  ],
  'Hyderabad': [
    { id: 'hyd-bp1', name: 'MGBS Central Bus Station', timeOffsetMinutes: 0, landmark: 'Terminal Platform 6' },
    { id: 'hyd-bp2', name: 'Lakdikapul Petrol Pump', timeOffsetMinutes: 20, landmark: 'Beside Dwaraka Hotel' },
    { id: 'hyd-bp3', name: 'Ameerpet Metro Pillar #1042', timeOffsetMinutes: 40, landmark: 'Near Big Bazaar' },
    { id: 'hyd-bp4', name: 'Gachibowli Outer Ring Road', timeOffsetMinutes: 70, landmark: 'Near DLF Cybercity Gate' },
    { id: 'hyd-bp5', name: 'Secunderabad Railway Station', timeOffsetMinutes: 30, landmark: 'Opp. Gurudwara' }
  ],
  'Mumbai': [
    { id: 'mum-bp1', name: 'Borivali West (Gokul Hotel)', timeOffsetMinutes: 0, landmark: 'Near Chamunda Circle' },
    { id: 'mum-bp2', name: 'Andheri East (Parsi Gymkhana)', timeOffsetMinutes: 30, landmark: 'Western Express Highway' },
    { id: 'mum-bp3', name: 'Dadar Asiad Bus Terminal', timeOffsetMinutes: 60, landmark: 'Near Swami Narayan Temple' },
    { id: 'mum-bp4', name: 'Vashi Plaza Highway Junction', timeOffsetMinutes: 95, landmark: 'Sion-Panvel Expressway' }
  ],
  'Pune': [
    { id: 'pun-bp1', name: 'Wakad Bridge Highway Stop', timeOffsetMinutes: 0, landmark: 'Near Ginger Hotel' },
    { id: 'pun-bp2', name: 'Hinjawadi Phase 1 Circle', timeOffsetMinutes: 20, landmark: 'Opp. Shivaji Chowk' },
    { id: 'pun-bp3', name: 'Swargate Bus Station', timeOffsetMinutes: 50, landmark: 'Near Police Ground' },
    { id: 'pun-bp4', name: 'Hadapsar Gadital Chowk', timeOffsetMinutes: 80, landmark: 'Solapur Road Bypass' }
  ],
  'Chennai': [
    { id: 'che-bp1', name: 'Koyambedu (CMBT)', timeOffsetMinutes: 0, landmark: 'Omni Bus Stand Platform 4' },
    { id: 'che-bp2', name: 'Ashok Nagar Pillar #12', timeOffsetMinutes: 25, landmark: 'Near Police Station' },
    { id: 'che-bp3', name: 'Guindy Kathipara Junction', timeOffsetMinutes: 45, landmark: 'Under Flyover Bus Bay' },
    { id: 'che-bp4', name: 'Tambaram Sanatorium', timeOffsetMinutes: 75, landmark: 'Opp. MEPZ Gate' }
  ],
  'Delhi': [
    { id: 'del-bp1', name: 'Kashmere Gate ISBT', timeOffsetMinutes: 0, landmark: 'Gate No. 2, Metro Station' },
    { id: 'del-bp2', name: 'Dhaula Kuan Flyover', timeOffsetMinutes: 40, landmark: 'Airport Metro Pillar #80' },
    { id: 'del-bp3', name: 'Anand Vihar ISBT', timeOffsetMinutes: 30, landmark: 'Foot Over Bridge Pillar #14' },
    { id: 'del-bp4', name: 'Mahipalpur Toll Plaza', timeOffsetMinutes: 65, landmark: 'NH48 Highway Entry' }
  ],
  'Jaipur': [
    { id: 'jai-bp1', name: 'Sindhi Camp Central Bus Stand', timeOffsetMinutes: 0, landmark: 'Platform 3' },
    { id: 'jai-bp2', name: 'Narayan Singh Circle', timeOffsetMinutes: 20, landmark: 'Near City Palace Road' },
    { id: 'jai-bp3', name: '200 Feet Bypass Ajmer Road', timeOffsetMinutes: 45, landmark: 'Near Cloverleaf Flyover' }
  ],
  'Goa': [
    { id: 'goa-bp1', name: 'Panaji KTC Bus Stand', timeOffsetMinutes: 0, landmark: 'Interstate Bay 1' },
    { id: 'goa-bp2', name: 'Mapusa Gandhi Chowk', timeOffsetMinutes: 30, landmark: 'Near Police Station' },
    { id: 'goa-bp3', name: 'Margao KTC Terminal', timeOffsetMinutes: 50, landmark: 'Platform 4' }
  ],
  'Ahmedabad': [
    { id: 'ahm-bp1', name: 'Geeta Mandir Central Bus Stand', timeOffsetMinutes: 0, landmark: 'Near ST Workshop' },
    { id: 'ahm-bp2', name: 'Paldi Cross Road', timeOffsetMinutes: 25, landmark: 'Near Vishwakarma Arcade' },
    { id: 'ahm-bp3', name: 'Iscon Cross Road SG Highway', timeOffsetMinutes: 50, landmark: 'Near Mega Mall' }
  ],
  'Surat': [
    { id: 'sur-bp1', name: 'Central Bus Terminal', timeOffsetMinutes: 0, landmark: 'Railway Station Road' },
    { id: 'sur-bp2', name: 'Kamrej Char Rasta Highway', timeOffsetMinutes: 40, landmark: 'Near Hotel Navjivan' }
  ],
  'Kolkata': [
    { id: 'kol-bp1', name: 'Esplanade Bus Terminus (Babughat)', timeOffsetMinutes: 0, landmark: 'Near Eden Gardens Gate' },
    { id: 'kol-bp2', name: 'Karunamoyee Bus Terminal Salt Lake', timeOffsetMinutes: 40, landmark: 'Central Park Gate' },
    { id: 'kol-bp3', name: 'Airport Gate No. 1', timeOffsetMinutes: 70, landmark: 'VIP Road Bus Bay' }
  ],
  'Mysore': [
    { id: 'mys-bp1', name: 'Suburban Bus Stand', timeOffsetMinutes: 0, landmark: 'Near Palace South Gate' },
    { id: 'mys-bp2', name: 'Columbia Asia Hospital Circle', timeOffsetMinutes: 25, landmark: 'Bangalore-Mysore Highway Toll' }
  ],
  'Coimbatore': [
    { id: 'coi-bp1', name: 'Gandhipuram Omni Bus Stand', timeOffsetMinutes: 0, landmark: 'Platform 2' },
    { id: 'coi-bp2', name: 'Ukkadam Bus Stand', timeOffsetMinutes: 20, landmark: 'Near Lake Park' },
    { id: 'coi-bp3', name: 'KMCH Avinashi Road', timeOffsetMinutes: 45, landmark: 'Civil Aerodrome Post' }
  ],
  'Kochi': [
    { id: 'koc-bp1', name: 'Vyttila Mobility Hub', timeOffsetMinutes: 0, landmark: 'Terminal Platform 3' },
    { id: 'koc-bp2', name: 'Edappally Toll Toll Gate', timeOffsetMinutes: 30, landmark: 'Near Lulu Mall Metro Station' }
  ],
  'Vijayawada': [
    { id: 'vij-bp1', name: 'Pandit Nehru Bus Station (PNBS)', timeOffsetMinutes: 0, landmark: 'Platform 12, Terminal A' },
    { id: 'vij-bp2', name: 'Benz Circle Highway Junction', timeOffsetMinutes: 25, landmark: 'Near Jyothi Mahal' }
  ],
  'Visakhapatnam': [
    { id: 'vis-bp1', name: 'Dwaraka Bus Station (RTC Complex)', timeOffsetMinutes: 0, landmark: 'Main Gate' },
    { id: 'vis-bp2', name: 'Gajuwaka Junction', timeOffsetMinutes: 40, landmark: 'Opp. CMR Mall' }
  ],
  'Chandigarh': [
    { id: 'cha-bp1', name: 'ISBT Sector 43', timeOffsetMinutes: 0, landmark: 'Long Distance Bay' },
    { id: 'cha-bp2', name: 'Tribune Chowk', timeOffsetMinutes: 20, landmark: 'Near Industrial Area Phase 2' }
  ]
};

// Generates an authentic full-length redBus seat layout (11-row 45-seater / 10-row 60-sleeper berths)
export function generateRealisticSeatDeck(busCategory, basePrice) {
  if (busCategory === 'sleeper') {
    const lowerDeck = [];
    const upperDeck = [];

    for (let r = 1; r <= 10; r++) {
      // Alternate gender reserved rows realistically
      const isFemaleRow = r === 2 || r === 5 || r === 7;
      const isMaleRow = r === 3 || r === 6 || r === 9;
      const rowPrice = r >= 8 ? basePrice - 50 : basePrice;

      // Lower deck berths
      lowerDeck.push(
        {
          id: `L${(r - 1) * 3 + 1}`,
          row: r,
          col: 'left',
          type: 'sleeper',
          price: rowPrice + 100,
          status: (r === 1 || r === 4 || r === 7 || r === 9 || r === 10) ? 'available' : 'booked',
          isWindow: true,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        },
        {
          id: `L${(r - 1) * 3 + 2}`,
          row: r,
          col: 'right-inner',
          type: 'sleeper',
          price: rowPrice,
          status: (r === 2 || r === 3 || r === 6 || r === 8 || r === 9) ? 'available' : 'booked',
          isWindow: false,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        },
        {
          id: `L${(r - 1) * 3 + 3}`,
          row: r,
          col: 'right-window',
          type: 'sleeper',
          price: rowPrice + 50,
          status: (r === 2 || r === 5 || r === 6 || r === 7 || r === 10) ? 'available' : 'booked',
          isWindow: true,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        }
      );

      // Upper deck berths
      upperDeck.push(
        {
          id: `U${(r - 1) * 3 + 1}`,
          row: r,
          col: 'left',
          type: 'sleeper',
          price: rowPrice + 150,
          status: (r === 1 || r === 3 || r === 4 || r === 7 || r === 10) ? 'available' : 'booked',
          isWindow: true,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        },
        {
          id: `U${(r - 1) * 3 + 2}`,
          row: r,
          col: 'right-inner',
          type: 'sleeper',
          price: rowPrice + 50,
          status: (r === 2 || r === 5 || r === 8 || r === 9) ? 'available' : 'booked',
          isWindow: false,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        },
        {
          id: `U${(r - 1) * 3 + 3}`,
          row: r,
          col: 'right-window',
          type: 'sleeper',
          price: rowPrice + 100,
          status: (r === 2 || r === 4 || r === 6 || r === 7 || r === 10) ? 'available' : 'booked',
          isWindow: true,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        }
      );
    }

    return { lowerDeck, upperDeck };
  } else {
    // 10 Rows of 2+2 (40 seats) + Row 11 Rear Bench (5 seats) = 45 seats total!
    const lowerDeck = [];
    let seatNum = 1;

    for (let r = 1; r <= 10; r++) {
      const isFemaleRow = (r === 1 || r === 4 || r === 7 || r === 8 || r === 10);
      const isMaleRow = (r === 2 || r === 3 || r === 5 || r === 6 || r === 9);
      const seatPrice = basePrice;

      // Available & booked distribution matching redBus screenshot:
      const statusL1 = (r === 4 || r === 8) ? 'available' : 'booked';
      const statusL2 = (r === 6 || r === 10) ? 'available' : 'booked';
      const statusR1 = (r === 3 || r === 7 || r === 9) ? 'available' : 'booked';
      const statusR2 = (r === 2 || r === 5) ? 'available' : 'booked';

      lowerDeck.push(
        {
          id: `${seatNum}`,
          row: r,
          col: 'left-window',
          type: 'seater',
          price: seatPrice,
          status: statusL1,
          isWindow: true,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        },
        {
          id: `${seatNum + 1}`,
          row: r,
          col: 'left-aisle',
          type: 'seater',
          price: seatPrice,
          status: statusL2,
          isWindow: false,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        },
        {
          id: `${seatNum + 2}`,
          row: r,
          col: 'right-aisle',
          type: 'seater',
          price: seatPrice,
          status: statusR1,
          isWindow: false,
          isFemaleOnly: r === 7 ? true : isFemaleRow,
          isMaleOnly: r === 9 ? true : isMaleRow
        },
        {
          id: `${seatNum + 3}`,
          row: r,
          col: 'right-window',
          type: 'seater',
          price: seatPrice,
          status: statusR2,
          isWindow: true,
          isFemaleOnly: isFemaleRow,
          isMaleOnly: isMaleRow
        }
      );
      seatNum += 4;
    }

    // Row 11: Rear Bench with 5 seats across (all priced ₹451 matching screenshot!)
    const rearPrice = Math.max(350, basePrice - 68);
    for (let c = 1; c <= 5; c++) {
      lowerDeck.push({
        id: `${seatNum}`,
        row: 11,
        col: `rear-${c}`,
        type: 'seater',
        price: rearPrice,
        status: 'available',
        isWindow: c === 1 || c === 5,
        isFemaleOnly: false,
        isMaleOnly: true,
        isRearBench: true
      });
      seatNum++;
    }

    return { lowerDeck, upperDeck: [] };
  }
}

// Master list of real bus operators
export const OPERATOR_PROFILES = [
  {
    name: 'IntrCity SmartBus',
    fleetType: 'Bharat Benz A/C Sleeper (2+1)',
    category: 'sleeper',
    isAC: true,
    isElectric: false,
    rating: 4.8,
    totalRatings: 3410,
    features: ['In-bus Washroom', 'Air Suspension', 'Thermal Blanket', 'Mineral Water Bottle', 'GPS Live Tracking', 'Emergency SOS', 'Personal USB Port'],
    vehicleReg: 'KA 01 AK 9842',
    captain: 'Ramesh Kumar',
    captainPhone: '+91 98450 12345'
  },
  {
    name: 'VRL Travels',
    fleetType: 'Volvo 9600 Multi-Axle I-Shift A/C Sleeper (2+1)',
    category: 'sleeper',
    isAC: true,
    isElectric: false,
    rating: 4.7,
    totalRatings: 6120,
    features: ['Personal LCD Screen', 'Pillow & Linen', 'Punctuality Guarantee', 'Reading Lamp', 'Live Tracking', 'Luggage Tagging'],
    vehicleReg: 'KA 25 F 4102',
    captain: 'Suresh Patil',
    captainPhone: '+91 98441 55670'
  },
  {
    name: 'NueGo Electric (GoGreen)',
    fleetType: 'Electric Ultra Silent A/C Seater (2+2)',
    category: 'seater',
    isAC: true,
    isElectric: true,
    rating: 4.9,
    totalRatings: 4230,
    features: ['100% Zero Emission', 'Whisper Silent Ride', 'CCTV Security', 'USB Quick Charging', 'Driver Alcohol Test Checked', 'Clean Interiors'],
    vehicleReg: 'DL 1P C 8921',
    captain: 'Mohit Sharma',
    captainPhone: '+91 98110 33490'
  },
  {
    name: 'Orange Tours and Travels',
    fleetType: 'Scania Multi-Axle A/C Semi Sleeper (2+2)',
    category: 'seater',
    isAC: true,
    isElectric: false,
    rating: 4.6,
    totalRatings: 2840,
    features: ['140° Calf Support Recliner', 'Individual Charging Point', 'Air-Conditioned', 'Emergency Exit', 'Rest Stop Halt'],
    vehicleReg: 'AP 29 T 7720',
    captain: 'Venkat Reddy',
    captainPhone: '+91 94401 77201'
  },
  {
    name: 'Zingbus Premium Lounge',
    fleetType: 'Volvo B11R Multi-Axle A/C Sleeper (2+1)',
    category: 'sleeper',
    isAC: true,
    isElectric: false,
    rating: 4.8,
    totalRatings: 3190,
    features: ['Lounge Access Included', 'Complimentary Hot Beverage', 'Free Travel Insurance', 'Sanitized Blankets', 'Live GPS Tracking'],
    vehicleReg: 'MH 12 Q 3309',
    captain: 'Anand Shinde',
    captainPhone: '+91 98220 89100'
  },
  {
    name: 'KSRTC Airavat Club Class',
    fleetType: 'Volvo Multi-Axle A/C Semi Sleeper (2+2)',
    category: 'seater',
    isAC: true,
    isElectric: false,
    rating: 4.7,
    totalRatings: 8490,
    features: ['Govt Safety Certified', 'Senior Citizen Assistance', 'High Punctuality 98%', 'Mineral Water', 'Emergency Hammer'],
    vehicleReg: 'KA 57 F 1200',
    captain: 'Manjunath Gowda',
    captainPhone: '+91 94480 22001'
  }
];

// Curated schedules for major routes; smart dynamic generator for any other pair!
const ROUTE_DATA_BASE = {
  'Bangalore-Hyderabad': { duration: '8h 30m', baseFare: 1050, departureTimes: ['21:00', '21:30', '22:15', '22:45', '23:15', '06:30'] },
  'Hyderabad-Bangalore': { duration: '8h 30m', baseFare: 1050, departureTimes: ['21:15', '21:45', '22:30', '23:00', '23:30', '07:00'] },
  'Mumbai-Pune': { duration: '3h 30m', baseFare: 420, departureTimes: ['06:00', '08:30', '11:15', '14:30', '17:00', '19:30'] },
  'Pune-Mumbai': { duration: '3h 30m', baseFare: 420, departureTimes: ['06:30', '09:00', '12:00', '15:00', '18:00', '20:30'] },
  'Chennai-Bangalore': { duration: '6h 00m', baseFare: 650, departureTimes: ['07:00', '13:30', '21:30', '22:30', '23:15', '23:45'] },
  'Bangalore-Chennai': { duration: '6h 00m', baseFare: 650, departureTimes: ['06:45', '14:00', '21:45', '22:45', '23:00', '23:30'] },
  'Delhi-Jaipur': { duration: '5h 15m', baseFare: 480, departureTimes: ['06:30', '09:30', '13:00', '16:30', '19:00', '22:30'] },
  'Jaipur-Delhi': { duration: '5h 15m', baseFare: 480, departureTimes: ['07:00', '10:00', '14:00', '17:00', '20:00', '23:00'] },
  'Bangalore-Goa': { duration: '11h 00m', baseFare: 1250, departureTimes: ['19:30', '20:30', '21:15', '22:00', '22:30'] },
  'Goa-Bangalore': { duration: '11h 00m', baseFare: 1250, departureTimes: ['19:00', '20:00', '21:00', '21:30', '22:15'] },
  'Mumbai-Goa': { duration: '11h 30m', baseFare: 1150, departureTimes: ['18:30', '19:30', '20:30', '21:15', '22:00'] },
  'Goa-Mumbai': { duration: '11h 30m', baseFare: 1150, departureTimes: ['18:00', '19:00', '20:00', '21:00', '21:45'] },
  'Pune-Goa': { duration: '9h 30m', baseFare: 980, departureTimes: ['20:00', '21:00', '22:00', '22:45', '23:15'] },
  'Bangalore-Mysore': { duration: '3h 15m', baseFare: 380, departureTimes: ['06:00', '08:00', '11:00', '14:30', '17:30', '20:00'] },
  'Mysore-Bangalore': { duration: '3h 15m', baseFare: 380, departureTimes: ['06:30', '09:00', '12:00', '15:00', '18:00', '21:00'] },
  'Hyderabad-Vijayawada': { duration: '5h 30m', baseFare: 550, departureTimes: ['06:00', '13:00', '21:00', '22:30', '23:15'] },
  'Vijayawada-Hyderabad': { duration: '5h 30m', baseFare: 550, departureTimes: ['06:30', '14:00', '21:30', '22:45', '23:30'] },
  'Delhi-Chandigarh': { duration: '4h 45m', baseFare: 490, departureTimes: ['06:00', '08:30', '12:00', '15:30', '18:30', '22:00'] },
  'Chandigarh-Delhi': { duration: '4h 45m', baseFare: 490, departureTimes: ['06:30', '09:00', '12:30', '16:00', '19:00', '22:30'] },
  'Ahmedabad-Mumbai': { duration: '8h 45m', baseFare: 890, departureTimes: ['20:00', '21:00', '21:45', '22:30', '23:15'] },
  'Mumbai-Ahmedabad': { duration: '8h 45m', baseFare: 890, departureTimes: ['20:30', '21:15', '22:00', '22:45', '23:30'] },
  'Chennai-Coimbatore': { duration: '8h 00m', baseFare: 750, departureTimes: ['20:30', '21:15', '22:00', '22:30', '23:00'] },
  'Coimbatore-Chennai': { duration: '8h 00m', baseFare: 750, departureTimes: ['20:00', '21:00', '21:45', '22:15', '23:00'] },
  'Bangalore-Coimbatore': { duration: '6h 30m', baseFare: 680, departureTimes: ['21:30', '22:15', '22:45', '23:15', '23:45'] }
};

export function getBusesForRoute(fromCity, toCity) {
  // If same city selected, return empty or fallback with guidance
  if (fromCity.toLowerCase() === toCity.toLowerCase()) {
    return [];
  }

  const routeKey = `${fromCity}-${toCity}`;
  const reverseKey = `${toCity}-${fromCity}`;

  let routeData = ROUTE_DATA_BASE[routeKey];
  if (!routeData && ROUTE_DATA_BASE[reverseKey]) {
    routeData = ROUTE_DATA_BASE[reverseKey];
  }

  if (!routeData) {
    // Dynamic realistic estimation for any of the 30+ cities
    routeData = {
      duration: '7h 45m',
      baseFare: 790,
      departureTimes: ['06:30', '14:00', '20:30', '21:45', '22:30', '23:15']
    };
  }

  // Retrieve or create realistic boarding points for fromCity
  const defaultBoarding = [
    { id: `bp-${fromCity}-1`, name: `${fromCity} Central Inter-State Bus Stand`, timeOffsetMinutes: 0, landmark: 'Terminal Platform 1' },
    { id: `bp-${fromCity}-2`, name: `${fromCity} Railway Station Circle`, timeOffsetMinutes: 25, landmark: 'Near Clock Tower' },
    { id: `bp-${fromCity}-3`, name: `${fromCity} Highway Toll Bypass`, timeOffsetMinutes: 55, landmark: 'National Highway Toll Plaza' }
  ];
  const fromPoints = CITY_BOARDING_POINTS[fromCity] || defaultBoarding;

  // Retrieve or create realistic dropping points for toCity
  const defaultDropping = [
    { id: `dp-${toCity}-1`, name: `${toCity} Highway Toll Plaza`, timeOffsetMinutes: 0, landmark: 'Outer Ring Road Bus Bay' },
    { id: `dp-${toCity}-2`, name: `${toCity} Central Bus Terminal`, timeOffsetMinutes: 30, landmark: 'City Center Platform 4' }
  ];
  const toPoints = CITY_BOARDING_POINTS[toCity] || defaultDropping;

  return OPERATOR_PROFILES.map((op, idx) => {
    const depTime = routeData.departureTimes[idx % routeData.departureTimes.length];
    const durationHours = parseInt(routeData.duration);
    const durationMins = parseInt(routeData.duration.split(' ')[1] || '0');

    // Calculate arrival time realistically
    const [depH, depM] = depTime.split(':').map(Number);
    let arrH = (depH + durationHours + Math.floor((depM + durationMins) / 60)) % 24;
    let arrM = (depM + durationMins) % 60;
    const arrTime = `${String(arrH).padStart(2, '0')}:${String(arrM).padStart(2, '0')}`;

    // Dynamic fare calculation
    const baseFare = op.category === 'sleeper' ? routeData.baseFare + 250 : routeData.baseFare;
    const originalFare = Math.round(baseFare * 1.25);

    // Boarding points with exact timestamps
    const busBoarding = fromPoints.map((p, pIdx) => {
      const bMin = (depM + (p.timeOffsetMinutes || pIdx * 20)) % 60;
      const bHour = (depH + Math.floor((depM + (p.timeOffsetMinutes || pIdx * 20)) / 60)) % 24;
      return {
        id: `bp-${idx}-${pIdx}`,
        name: p.name,
        time: `${String(bHour).padStart(2, '0')}:${String(bMin).padStart(2, '0')}`,
        landmark: p.landmark
      };
    });

    // Dropping points with exact timestamps
    const busDropping = toPoints.map((p, pIdx) => {
      const dMin = (arrM + (p.timeOffsetMinutes || pIdx * 25)) % 60;
      const dHour = (arrH + Math.floor((arrM + (p.timeOffsetMinutes || pIdx * 25)) / 60)) % 24;
      return {
        id: `dp-${idx}-${pIdx}`,
        name: p.name,
        time: `${String(dHour).padStart(2, '0')}:${String(dMin).padStart(2, '0')}`,
        landmark: p.landmark
      };
    });

    const { lowerDeck, upperDeck } = generateRealisticSeatDeck(op.category, baseFare);
    const availableLower = lowerDeck.filter(s => s.status === 'available').length;
    const availableUpper = upperDeck.filter(s => s.status === 'available').length;
    const singleLeft = lowerDeck.filter(s => s.isWindow && s.status === 'available').length +
                       upperDeck.filter(s => s.isWindow && s.status === 'available').length;

    return {
      id: `bus-${fromCity.toLowerCase().slice(0,3)}-${toCity.toLowerCase().slice(0,3)}-${idx + 1}`,
      operator: op.name,
      busType: op.fleetType,
      category: op.category,
      isAC: op.isAC,
      isElectric: op.isElectric,
      departureTime: depTime,
      arrivalTime: arrTime,
      duration: routeData.duration,
      rating: op.rating,
      totalReviews: op.totalRatings,
      baseFare,
      originalFare,
      seatsLeft: availableLower + availableUpper,
      singleSeatsLeft: singleLeft,
      hasLiveTracking: true,
      features: op.features,
      vehicleReg: op.vehicleReg,
      captain: op.captain,
      captainPhone: op.captainPhone,
      boardingPoints: busBoarding,
      droppingPoints: busDropping,
      lowerDeck,
      upperDeck
    };
  });
}

export const PROMO_OFFERS = [
  {
    code: 'DIWALI10',
    title: 'Deepavali Dhamaka: Extra 10% OFF',
    desc: 'Celebrate the Festival of Lights! Flat 10% extra discount up to ₹350 on all bus bookings with code DIWALI10',
    badge: 'DIWALI SPECIAL 🪔',
    minBooking: 300,
    discountPercent: 10,
    maxDiscount: 350,
    validUntil: 'Deepavali Festive Week'
  },
  {
    code: 'FESTIVE15',
    title: 'Festival Return Saver: 15% OFF',
    desc: 'Special 15% discount on round trip & festive return journeys up to ₹400',
    badge: 'RETURN SAVINGS ✨',
    minBooking: 600,
    discountPercent: 15,
    maxDiscount: 400,
    validUntil: 'Deepavali Festive Week'
  },
  {
    code: 'FIRSTTRIP',
    title: 'Flat 20% OFF',
    desc: 'Valid on first bus booking up to ₹300 discount',
    badge: 'NEW USER',
    minBooking: 500,
    discountPercent: 20,
    maxDiscount: 300,
    validUntil: '30 Nov 2026'
  },
  {
    code: 'EVGREEN',
    title: '₹150 OFF on Electric Buses',
    desc: 'Save flat ₹150 on NueGo Electric Green Buses',
    badge: 'ECO-FRIENDLY',
    minBooking: 500,
    discountAmount: 150,
    validUntil: '15 Dec 2026'
  },
  {
    code: 'BLUEBUS50',
    title: 'Instant ₹75 OFF',
    desc: 'Flat ₹75 instant discount on any AC bus booking',
    badge: 'INSTANT CASHBACK',
    minBooking: 400,
    discountAmount: 75,
    validUntil: '31 Dec 2026'
  },
  {
    code: 'SUPERWEEKEND',
    title: '15% Weekend Special',
    desc: 'Valid for departures on Friday, Saturday, and Sunday',
    badge: 'WEEKEND SPECIAL',
    minBooking: 800,
    discountPercent: 15,
    maxDiscount: 250,
    validUntil: 'Every Weekend'
  },
  {
    code: 'DEEPAVALI',
    title: 'Festive Mega ₹200 OFF',
    desc: 'Special Diwali bonus discount on premium Volvo & Scania AC Multi-Axle buses',
    badge: 'DIWALI MEGA 🎆',
    minBooking: 750,
    discountAmount: 200,
    validUntil: 'Deepavali Festive Week'
  },
  {
    code: 'FAMILYTRIP',
    title: 'Family Festive Saver 12%',
    desc: 'Save 12% extra when traveling home together with family & friends',
    badge: 'GROUP SAVINGS 👨‍👩‍👧‍👦',
    minBooking: 1000,
    discountPercent: 12,
    maxDiscount: 450,
    validUntil: 'Deepavali Festive Week'
  }
];

export const POPULAR_ROUTES = [
  { from: 'Bangalore', to: 'Hyderabad', duration: '8h 30m', startingPrice: 950 },
  { from: 'Mumbai', to: 'Pune', duration: '3h 30m', startingPrice: 420 },
  { from: 'Delhi', to: 'Jaipur', duration: '5h 15m', startingPrice: 480 },
  { from: 'Chennai', to: 'Bangalore', duration: '6h 00m', startingPrice: 650 },
  { from: 'Mumbai', to: 'Goa', duration: '11h 30m', startingPrice: 1150 },
  { from: 'Bangalore', to: 'Goa', duration: '11h 00m', startingPrice: 1250 },
  { from: 'Delhi', to: 'Chandigarh', duration: '4h 45m', startingPrice: 490 },
  { from: 'Hyderabad', to: 'Vijayawada', duration: '5h 30m', startingPrice: 550 },
  { from: 'Bangalore', to: 'Mysore', duration: '3h 15m', startingPrice: 380 },
  { from: 'Ahmedabad', to: 'Mumbai', duration: '8h 45m', startingPrice: 890 }
];

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    city: 'Bangalore',
    rating: 5,
    route: 'Bangalore to Hyderabad (IntrCity SmartBus)',
    comment: 'The female-only seat protection and live bus GPS tracking gave me immense safety. Clean linen and on-time drop at Gachibowli.'
  },
  {
    name: 'Rohan Mehra',
    city: 'Mumbai',
    rating: 5,
    route: 'Mumbai to Pune (NueGo Electric)',
    comment: 'Super silent electric bus. Booked in under 1 minute with instant QR boarding pass on WhatsApp. No printout needed.'
  },
  {
    name: 'Ananya Deshmukh',
    city: 'Pune',
    rating: 5,
    route: 'Pune to Goa (VRL Travels)',
    comment: 'BlueBus made selecting upper deck single window berth effortless. Clean 2+1 layout with aisle gap.'
  }
];
