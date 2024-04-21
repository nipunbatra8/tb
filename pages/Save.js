import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const TodoListPage = () => {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([
    { "id": "1", "name": "Keto Brick, Chocolate Peanut Butter Cup" },
    { "id": "2", "name": "Keto Brick, Coconut Cream" },
    { "id": "3", "name": "Keto Brick, Cookies And Cream" },
    { "id": "4", "name": "Keto Brick, Mocha" },
    { "id": "5", "name": "Keto Brick, Peanut Butter" },
    { "id": "6", "name": "Keto Brick, Toasted Almond Coconut" },
    { "id": "7", "name": "Heather's Choice, Packaroons - Lemon Lavender" },
    { "id": "8", "name": "Heather's Choice, Packaroons - Orange Vanilla" },
    { "id": "9", "name": "Heather's Choice, Packaroons - Spiced Cocoa" },
    { "id": "10", "name": "Universal Bakery, Paleo Grain Free" },
    { "id": "11", "name": "FBOMB, Chocolate Hazelnut" },
    { "id": "12", "name": "Autumn's Gold, Grain Free Granola - Cinnamon Almond" },
    { "id": "13", "name": "Coconut Secret, Grain-Free Granola - Original Coconut" },
    { "id": "14", "name": "Heather's Choice, Packaroons - Black Espresso" },
    { "id": "15", "name": "Heather's Choice, Packaroons - Blueberry Almond" },
    { "id": "16", "name": "Heather's Choice, Packaroons - Sweet Coconut" },
    { "id": "17", "name": "Power Crunch, Pro - French Vanilla Crème" },
    { "id": "18", "name": "Coconut Secret, Grain-Free Granola - Coconut Chocolate Chip" },
    { "id": "19", "name": "Nature Valley, Wafer - Peanut Butter" },
    { "id": "20", "name": "Nature Valley, Wafer - Peanut Butter Chocolate" },
    { "id": "21", "name": "Nature Valley, Wafer - Pretzel Peanut Butter" },
    { "id": "22", "name": "Power Crunch, Chocolate Coconut" },
    { "id": "23", "name": "Power Crunch, Chocolate Mint" },
    { "id": "24", "name": "Power Crunch, Cookies & Crème" },
    { "id": "25", "name": "Power Crunch, French Vanilla Crème" },
    { "id": "26", "name": "Power Crunch, Key Lime Pie" },
    { "id": "27", "name": "Power Crunch, Lemon Meringue" },
    { "id": "28", "name": "Power Crunch, Peanut Butter Crème" },
    { "id": "29", "name": "Power Crunch, Smores" },
    { "id": "30", "name": "Power Crunch, Strawberry Crème" },
    { "id": "31", "name": "Power Crunch, Triple Chocolate" },
    { "id": "32", "name": "Yes, Black Sesame Sea Salt" },
    { "id": "33", "name": "Yes, Dark Chocolate Chip" },
    { "id": "34", "name": "Yes, Macadamia Cherry Chocolate" },
    { "id": "35", "name": "Yes, Salted Maple Pecan" },
    { "id": "36", "name": "Yes, Strawberry Almond Coconut" },
    { "id": "37", "name": "Caveman, Grain Free Granola - Coconut Cashew" },
    { "id": "38", "name": "Health Warrior, Pumpkin Seed Dark Chocolate" },
    { "id": "39", "name": "Health Warrior, Pumpkin Seed Dark Chocolate Coconut" },
    { "id": "40", "name": "Health Warrior, Pumpkin Seed Dark Chocolate Peanut" },
    { "id": "41", "name": "Nature Valley, Almond Crunch Roasted Nut Crunch" },
    { "id": "42", "name": "Power Crunch, Peanut Butter Fudge" },
    { "id": "43", "name": "Power Crunch, Red Velvet" },
    { "id": "44", "name": "Power Crunch, Salted Caramel" },
    { "id": "45", "name": "Heather's Choice, Packaroons - Mint Chocolate" },
    { "id": "46", "name": "Coconut Secret, Grain-Free Granola - Chocolate Chocolate Chip" },
    { "id": "47", "name": "Yes, Coffee 'N' Chocolate" },
    { "id": "48", "name": "Power Crunch, Pro - Peanut Butter Fudge" },
    { "id": "49", "name": "Perfect Bar, Chocolate Hazelnut Crisp" },
    { "id": "50", "name": "Caveman, Grain Free Granola - Blueberry Almond" },
    { "id": "51", "name": "Caveman, Grain Free Granola - Cinnamon Raisin" },
    { "id": "52", "name": "Health Warrior, Pumpkin Seed Honey Sea Salt" },
    { "id": "53", "name": "Nature Valley, Protein - Chocolate Peanut Butter Crunch" },
    { "id": "54", "name": "Nature Valley, Protein - Peanut Butter Crunch" },
    { "id": "55", "name": "Umchu Primitive Nutrition, Almond Coconut" },
    { "id": "56", "name": "Umchu Primitive Nutrition, Coconut Cocoa Nibs" },
    { "id": "57", "name": "Umchu Primitive Nutrition, Honey Coconut & Nut" },
    { "id": "58", "name": "Umchu Primitive Nutrition, Primitive PB&J" },
    { "id": "59", "name": "Hemp Yeah!, Coconut Cashew Dark Chocolate" },
    { "id": "60", "name": "Hemp Yeah!, Dark Chocolate Almond Sea Salt" },
    { "id": "61", "name": "88 Acres, Dark Chocolate Brownie Protein" },
    { "id": "62", "name": "Perfect Bar, Dark Chocolate Chip Peanut Butter" },
    { "id": "63", "name": "Kind, Dark Chocolate Cinnamon Pecan" },
    { "id": "64", "name": "Kind, Maple Glazed Pecan & Sea Salt" },
    { "id": "65", "name": "Kind, Peanut Butter Dark Chocolate" },
    { "id": "66", "name": "Kind (Protein), Crunchy Peanut Butter" },
    { "id": "67", "name": "Nature Valley, Biscuit Sandwich - Chocolate Peanut Butter" },
    { "id": "68", "name": "Nature Valley, Biscuit Sandwich - Cinnamon Almond Butter" },
    { "id": "69", "name": "Nature Valley, Biscuit Sandwich - Cocoa Almond Butter" },
    { "id": "70", "name": "Nature Valley, Biscuit Sandwich - Coconut Butter" },
    { "id": "71", "name": "Nature Valley, Biscuit Sandwich - Peanut Butter" },
    { "id": "72", "name": "Nature Valley, Protein - Coconut Almond Chewy" },
    { "id": "73", "name": "Nature Valley, Protein - Peanut Almond Dark Chocolate Chewy" },
    { "id": "74", "name": "Nature Valley, Protein - Salted Caramel Nut Chewy" },
    { "id": "75", "name": "Nature Valley, Protein - XL Mixed Nut" },
    { "id": "76", "name": "Nature Valley, Protein - XL Peanut Butter Dark Chocolate" },
    { "id": "77", "name": "Perfect Bar, Chocolate Mint" },
    { "id": "78", "name": "Perfect Bar, Dark Chocolate Almond" },
    { "id": "79", "name": "Perfect Bar, Double Dark Chocolate" },
    { "id": "80", "name": "Perfect Bar, Salted Caramel" },
    { "id": "81", "name": "Power Crunch, Peanut Butter Crème" },
    { "id": "82", "name": "Perfect Bar, Coconut Peanut Butter" },
    { "id": "83", "name": "Perfect Bar, Almond Butter" },
    { "id": "84", "name": "Hemp Yeah!, Dark Chocolate Cacao" },
    { "id": "85", "name": "Larabar, Pecan Pie" },
    { "id": "86", "name": "Umchu Primitive Nutrition, Peanut Sea Salt" },
    { "id": "87", "name": "Nature Valley, Almond Butter Layered Granola, Chocolate" },
    { "id": "88", "name": "Nature Valley, Sweet & Salty Nut Granola Bar, Peanut" },
    { "id": "89", "name": "Nature Valley, Protein - XL Salted Caramel Dark Chocolate" },
    { "id": "90", "name": "Pro Bar (Meal), Oatmeal Chocolate Chip" },
    { "id": "91", "name": "Kind (Protein), Caramel Nut" },
    { "id": "92", "name": "Kind (Protein), Dark Chocolate Nut" },
    { "id": "93", "name": "Perfect Bar, Peanut Butter" },
    { "id": "94", "name": "Perfect Bar, Blueberry Cashew" },
    { "id": "95", "name": "Kind, Apple Cinnamon Pecan" },
    { "id": "96", "name": "Kind, Salted Caramel Dark Chocolate Nut" },
    { "id": "97", "name": "Nature Valley, Protein - Blueberry Nut" },
    { "id": "98", "name": "Nature Valley, Protein - Honey Peanut Almond Chewy" },
    { "id": "99", "name": "Nature Valley, Protein - Peanut Butter Dark Chocolate Chewy" },
    { "id": "100", "name": "Nature Valley, Soft-Baked Filled Squares, Honey Peanut Butter" },
    { "id": "101", "name": "88 Acres, Banana Bread Protein" },
    { "id": "102", "name": "Pro Bar (Meal), Banana Nut Bread" },
    { "id": "103", "name": "Pro Bar (Meal), Blueberry Muffin" },
    { "id": "104", "name": "Pro Bar (Meal), Peanut Butter Chocolate Chip" },
    { "id": "105", "name": "Pro Bar (Meal), S'mores" },
    { "id": "106", "name": "Raw Revolution, Coconut Delight" },
    { "id": "107", "name": "Larabar, Chocolate Chip Cookie Dough" },
    { "id": "108", "name": "Larabar, Cocoa Coconut Chew" },
    { "id": "109", "name": "Larabar, Peanut Butter Chocolate Chip" },
    { "id": "110", "name": "Umchu Primitive Nutrition, Seeds & Seeds" },
    { "id": "111", "name": "Clif (Nut Butter Filled), Caramel Chocolate Peanut Butter" },
    { "id": "112", "name": "Clif (Nut Butter Filled), Chocolate & Hazelnut Butter" },
    { "id": "113", "name": "Clif (Nut Butter Filled), Chocolate & Peanut Butter" },
    { "id": "114", "name": "Clif (Nut Butter Filled), Coconut & Almond Butter" },
    { "id": "115", "name": "Clif (Nut Butter Filled), Maple & Almond Butter" },
    { "id": "116", "name": "Clif (Nut Butter Filled), Peanut Butter" },
    { "id": "117", "name": "Clif (Nut Butter Filled), Tart Cherry & Cashew Butter" },
    { "id": "118", "name": "Kind (Breakfast), Peanut Butter Dark Chocolate Probiotic" },
    { "id": "119", "name": "Kind (Protein), Almond Butter Dark Chocolate" },
    { "id": "120", "name": "Pro Bar (Meal), Almond Cashew Crunch" },
    { "id": "121", "name": "Pro Bar (Meal), Chocolate Coconut" },
    { "id": "122", "name": "Pro Bar (Meal), Peanut Butter" },
    { "id": "123", "name": "Larabar, Cashew Cookie" },
    { "id": "124", "name": "Larabar, Peanut Butter Cookie" },
    { "id": "125", "name": "Honey Stinger, Dark Chocolate Coconut Almond Pro" },
    { "id": "126", "name": "Nature Valley, Granola Bar, Oats & Honey" },
    { "id": "127", "name": "Kind, Almond & Coconut" },
    { "id": "128", "name": "Kind, Dark Chocolate Almond Coconut" },
    { "id": "129", "name": "Kind, Dark Chocolate Chili Almond" },
    { "id": "130", "name": "Kind, Dark Chocolate Nuts & Sea Salt" },
    { "id": "131", "name": "Kind, Extra Dark Chocolate Nuts & Sea Salt" },
    { "id": "132", "name": "Kind, Fruit & Nut" },
    { "id": "133", "name": "Kind, Honey Roasted Nuts & Sea Salt" },
    { "id": "134", "name": "Kind, Madagascar Vanilla Almond" },
    { "id": "135", "name": "Kind, Peanut Butter & Strawberry" },
    { "id": "136", "name": "Greenbelly, Meal 2GO, Caramel Apple" },
    { "id": "137", "name": "Bear Naked, Peanut Butter & Honey" },
    { "id": "138", "name": "Pro Bar (Meal), Superfood Slam" },
    { "id": "139", "name": "Clif Builder's, Crunchy Peanut Butter" },
    { "id": "140", "name": "Kind (Breakfast), Almond Butter Protein" },
    { "id": "141", "name": "Kind (Breakfast), Blueberry Almond" },
    { "id": "142", "name": "Kind (Breakfast), Dark Chocolate Cocoa Protein" },
    { "id": "143", "name": "Kind (Breakfast), Honey Oat" },
    { "id": "144", "name": "Kind (Breakfast), Peanut Butter Banana Dark Chocolate Protein" },
    { "id": "145", "name": "Atkins, Chocolate Chip Granola" },
    { "id": "146", "name": "Atkins, Peanut Butter Granola Bar" },
    { "id": "147", "name": "Gatorade Recover, Mint Chocolate Crunch" },
    { "id": "148", "name": "Gatorade Recover, Peanut Butter Chocolate" },
    { "id": "149", "name": "Larabar, Coconut Cream Pie" },
    { "id": "150", "name": "Munk Pack, Keto Granola - Almond Butter Cocoa Chip" },
    { "id": "151", "name": "Munk Pack, Keto Granola - Blueberry Almond Vanilla" },
    { "id": "152", "name": "Munk Pack, Keto Granola - Coconut Cocoa Chip" },
    { "id": "153", "name": "Off The Farm, Cocoa Coconut Macaroon" },
    { "id": "154", "name": "Bonk Breaker, Peanut Butter Chocolate Chip" },
    { "id": "155", "name": "Pro Bar (Meal), Mocha Almond Fudge" },
    { "id": "156", "name": "Pro Bar (Meal), Original Trail Mix" },
    { "id": "157", "name": "Pro Bar (Meal), Superberry and Greens" },
    { "id": "158", "name": "Pro Bar (Meal), Superfruit Slam" },
    { "id": "159", "name": "Pro Bar (Meal), Wholeberry Blast" },
    { "id": "160", "name": "Taos Bakes, Pecan Praline + Maple Syrup" },
    { "id": "161", "name": "Muscle Milk, Chocolate Peanut Butter" },
    { "id": "162", "name": "GoMacro, Protein Paradise (Cashew Caramel)" },
    { "id": "163", "name": "Pro Bar (Bite), Coconut Almond" },
    { "id": "164", "name": "Robert Irvine Fortifx, Chocolate Chip Cookie Dough" },
    { "id": "165", "name": "Robert Irvine Fortifx, Cookies and Cream" },
    { "id": "166", "name": "Robert Irvine Fortifx, Peanut Butter" },
    { "id": "167", "name": "The Paleo Diet Bar, Cinnamon Raisin" },
    { "id": "168", "name": "Greenbelly, Meal 2GO, Mango Cashew Coconut" },
    { "id": "169", "name": "Greenbelly, Meal 2GO, Peanut/Apricot" },
    { "id": "170", "name": "Honey Stinger, Dark Chocolate Mint Almond Pro" },
    { "id": "171", "name": "Honey Stinger, Dark Chocolate Mocha Cherry Pro" },
    { "id": "172", "name": "Nature Valley, Crunchy Granola Bars, Almond Butter" },
    { "id": "173", "name": "Atkins, Peanut Butter Fudge Crisp" },
    { "id": "174", "name": "Kind (Healthy Grains), Double Dark Chocolate" },
    { "id": "175", "name": "Kind (Healthy Grains), Maple Pumpkin Seeds with Sea Salt" },
    { "id": "176", "name": "Kind (Healthy Grains), Oats & Honey with Toasted Coconut" },
    { "id": "177", "name": "Kind (Healthy Grains), Peanut Butter Dark Chocolate" },
    { "id": "178", "name": "Munk Pack, Keto Nut & Seed - Caramel Sea Salt" },
    { "id": "179", "name": "Munk Pack, Keto Nut & Seed - Macadamia White Choc." },
    { "id": "180", "name": "Clif Builder's, Chocolate Peanut Butter" },
    { "id": "181", "name": "Greenbelly, Meal 2GO, Dark Chocolate Banana" },
    { "id": "182", "name": "Atkins, Chocolate Coconut Bar" },
    { "id": "183", "name": "Atkins, White Chocolate Macadamia Nut" },
    { "id": "184", "name": "Gatorade Recover, Chocolate Pretzel" },
    { "id": "185", "name": "Kind, Almond & Apricot" },
    { "id": "186", "name": "Kind, Blueberry Almond Pecan" },
    { "id": "187", "name": "Kind, Caramel Almond & Sea Salt" },
    { "id": "188", "name": "Kind, Dark Chocolate Almond Mint" },
    { "id": "189", "name": "Kind, Dark Chocolate Mocha Almond" },
    { "id": "190", "name": "Kind, Raspberry Cashew Chia" },
    { "id": "191", "name": "Tram Bar, Peanut Butter Milk Chocolate Trail Mix" },
    { "id": "192", "name": "RXBAR Whole Food Protein Bar, Maple Sea Salt" },
{ "id": "193", "name": "Off The Farm Apple Cinnamon Pecan" },
{ "id": "194", "name": "88 Acres Spiced Cranberry Orange" },
{ "id": "195", "name": "88 Acres Triple Berry Blend" },
{ "id": "196", "name": "Larabar Banana Chocolate Chip" },
{ "id": "197", "name": "Larabar Carrot Cake" },
{ "id": "198", "name": "Zone Perfect Double Dark Chocolate" },
{ "id": "199", "name": "GoMacro MacroBar Protein Pleasure (Peanut Butter Choc. Chip)" },
{ "id": "200", "name": "Kind Breakfast Apple Cinnamon Probiotic" },
{ "id": "201", "name": "MET-Rx Big100 Super Cookie Crunch" },
{ "id": "202", "name": "Zone Perfect Fudge Graham" },
{ "id": "203", "name": "Greenbelly Meal 2GO, Cranberry/Almond" },
{ "id": "204", "name": "Umchu Primitive Nutrition Cinnamon Pecan" },
{ "id": "205", "name": "Atkins Chocolate Peanut Butter" },
{ "id": "206", "name": "Kirkland Soft & Chewy Granola, Chocolate Chip" },
{ "id": "207", "name": "Larabar Cherry Pie" },
{ "id": "208", "name": "Luna Chocolate Dipped Coconut" },
{ "id": "209", "name": "Soldier Fuel Energy Bar Real Peanut Butter" },
{ "id": "210", "name": "Pro Bar Protein Frosted Peanut Butter" },
{ "id": "211", "name": "Pro Bar Protein Peanut Butter Chocolate" },
{ "id": "212", "name": "Bear Valley Pemmican, Carob-Cocoa" },
{ "id": "213", "name": "Gatorade Recover Chocolate Caramel" },
{ "id": "214", "name": "Taos Mountain Energy Bar Pinon Coffee + Dk Chocolate" },
{ "id": "215", "name": "Taos Mountain Energy Bar Toasted Coconut + Vanilla Bean" },
{ "id": "216", "name": "Atkins Peanut Caramel Cluster" },
{ "id": "217", "name": "Clif Builder's Chocolate Mint" },
{ "id": "218", "name": "Clif Builder's Cookies 'N Cream" },
{ "id": "219", "name": "Bonk Breaker Almond Cherry Chunk" },
{ "id": "220", "name": "MET-Rx Big100 Peanut Butter Pretzel" },
{ "id": "221", "name": "Supreme Protein Caramel Nut Chocolate" },
{ "id": "222", "name": "Pro Bar Bite Peanut Butter Chocolate" },
{ "id": "223", "name": "Bounce Protein Energy Ball Cacao Mint Protein Bomb" },
{ "id": "224", "name": "RXBAR Blueberry" },
{ "id": "225", "name": "RXBAR Chocolate Sea Salt" },
{ "id": "226", "name": "RXBAR Peanut Butter Chocolate" },
{ "id": "227", "name": "GoMacro Granola + Coconut" },
{ "id": "228", "name": "Premier Protein Chocolate Peanut Butter" },
{ "id": "229", "name": "Balance Bar Chocolate Mint Cookie Crunch" },
{ "id": "230", "name": "Bounce Protein Energy Ball Coconut Macadamia" },
{ "id": "231", "name": "Kind Blueberry Vanilla & Cashew" },
{ "id": "232", "name": "Kind Cranberry Almond" },
{ "id": "233", "name": "Kind Dark Chocolate Cherry Cashew" },
{ "id": "234", "name": "Kind Pomegranate Blueberry Pistachio" },
{ "id": "235", "name": "MET-Rx Big100 Chocolate Caramel Coconut" },
{ "id": "236", "name": "NuGo Dark Dark Chocolate Pretzel with Sea Salt" },
{ "id": "237", "name": "Power Bar Triple Threat Peanut Butter Caramel" },
{ "id": "238", "name": "Pure Protein Bar Chocolate Salted Caramel" },
{ "id": "239", "name": "Skout Coconut Chocolate" },
{ "id": "240", "name": "Special K Protein Bar, Chocolate Peanut Butter" },
{ "id": "241", "name": "Special K Protein Meal Bars, Chocolate Peanut Butter" },
{ "id": "242", "name": "Think Thin Caramel Fudge" },
{ "id": "243", "name": "Tiger's Milk Original" },
{ "id": "244", "name": "Zone Perfect Chocolate Chip Cookie Dough" },
{ "id": "245", "name": "Zone Perfect Strawberry Yogurt" },
{ "id": "246", "name": "Kashi Chocolate Almond & Sea Salt" },
{ "id": "247", "name": "Kind Healthy Grains Cinnamon Oat" },
{ "id": "248", "name": "Kind Healthy Grains Dark Chocolate Mocha" },
{ "id": "249", "name": "Kind Healthy Grains Popped Dark Chocolate with Sea Salt" },
{ "id": "250", "name": "Kind Healthy Grains Popped Salted Caramel" },
{ "id": "251", "name": "Kind Healthy Grains Vanilla Blueberry" },
{ "id": "252", "name": "Munk Pack Keto Nut & Seed - Coconut Almond Dark Choc." },
{ "id": "253", "name": "Pro Bar Protein Coffee Crunch" },
{ "id": "254", "name": "Pro Bar Protein Mint Chocolate" },
{ "id": "255", "name": "Clif Bar Nuts & Seeds" },
{ "id": "256", "name": "Taos Mountain Energy Bar Chocolate Butterscotch" },
{ "id": "257", "name": "Six Star Peanut Butter Chocolate" },
{ "id": "258", "name": "Nature's Bakery Fig Bar Strawberry" },
{ "id": "259", "name": "Fiber One Bar Chocolate Peanut Butter" },
{ "id": "260", "name": "MET-Rx Big100 Super Chocolate Fudge (brownie)" },
{ "id": "261", "name": "Premier Protein Dark Chocolate Mint" },
{ "id": "262", "name": "Power Bar Protein Plus Chocolate Peanut Butter" },
{ "id": "263", "name": "Pro Bar Protein Cookie Dough" },
{ "id": "264", "name": "Think Thin Cookies and Crème" },
{ "id": "265", "name": "Clif Bar Chocolate Peanut Butter with Sea Salt" },
{ "id": "266", "name": "Clif Bar Crunchy Peanut Butter" },
{ "id": "267", "name": "Clif Bar Dark Chocolate Almond with Sea Salt" },
{ "id": "268", "name": "Clif Bar Peanut Butter & Honey with Sea Salt" },
{ "id": "269", "name": "Clif Bar Peanut Butter Banana" },
{ "id": "270", "name": "Clif Bar Sierra Trail Mix" },
{ "id": "271", "name": "Clif Bar White Chocolate Macademia Nut" },
{ "id": "272", "name": "Oatmega Chocolate Mint Crips" },
{ "id": "273", "name": "Pure Protein Bar Dark Chocolate Coconut" },
{ "id": "274", "name": "Skout Chocolate + Peanut Butter" },
{ "id": "275", "name": "Pro Bar Bite Mixed Berry" },
{ "id": "276", "name": "Special K Protein Bar, Double Chocolate" },
{ "id": "277", "name": "Bear Valley Coconut Almond" },
{ "id": "278", "name": "Think Thin Salted Caramel" },
{ "id": "279", "name": "Kind Pressed Cherry Apple Chia" },
{ "id": "280", "name": "Kind Pressed Mango Apple Chia" },
{ "id": "281", "name": "Kind Pressed Pineapple Coconut Chia" },
{ "id": "282", "name": "Clif Bar Blueberry Crisp" },
{ "id": "283", "name": "Clif Bar Caramel Macchiato (65mg caffeine)" },
{ "id": "284", "name": "Clif Bar Chocolate Brownie" },
{ "id": "285", "name": "Clif Bar Chocolate Chip" },
{ "id": "286", "name": "Clif Bar Chocolate Chunk with Sea Salt" },
{ "id": "287", "name": "Clif Bar Coconut Chocolate Chip" },
{ "id": "288", "name": "Clif Bar Cool Mint Chocolate" },
{ "id": "289", "name": "Clif Bar Dark Chocolate Mocha (65mg caffeine)" },
{ "id": "290", "name": "Clif Bar Oatmeal Raisin Walnut" },
{ "id": "291", "name": "Clif Bar Peanut Toffee Buzz" },
{ "id": "292", "name": "Clif Bar Vanilla Almond Latte (65mg caffeine)" },
{ "id": "293", "name": "Quest Bar Protein Bar, Pumpkin Pie (Limited)" },
{ "id": "294", "name": "Atkins Caramel Double Chocolate Crunch" },
{ "id": "295", "name": "MET-Rx Big100 Chocolate Chip Cookie Dough" },
{ "id": "296", "name": "Pure Protein Bar Chocolate Deluxe" },
{ "id": "297", "name": "Skout Apple + Cinnamon" },
{ "id": "298", "name": "Power Bar Protein Plus Chocolate Brownie" },
{ "id": "299", "name": "Power Bar Chocolate Peanut Butter" },
{ "id": "300", "name": "MET-Rx Peanut Butter Cup" },
{ "id": "301", "name": "Kind Pressed Dark Chocolate Banana" },
{ "id": "302", "name": "Kind Pressed Dark Chocolate Strawberry" },
{ "id": "303", "name": "Power Bar Chocolate" },
{ "id": "304", "name": "Atkins Salted Caramel Crunch" },
{ "id": "305", "name": "MusclePharm White Chocolate Raspberry" },
{ "id": "306", "name": "Nutri-Grain Strawberry" },
{ "id": "307", "name": "Mission 1 Chocolate Brownie" },
{ "id": "308", "name": "Power Bar Whey Protein Chocolate Chip Cookie Dough" },
{ "id": "309", "name": "Quest Bar Protein Bar, Cookies & Cream" },
{ "id": "310", "name": "Kind Pressed Apricot Pear Carrot Beet" },
{ "id": "311", "name": "Kind Pressed Pineapple Banana Kale Spinach" },
{ "id": "312", "name": "Kind Pressed Strawberry Apple Chia" },
{ "id": "313", "name": "Quest Bar Protein Bar, Cinnamon Roll" },
{ "id": "314", "name": "Grizzly Gear (none listed)" },
{ "id": "315", "name": "Mainstay (none listed)" },
{ "id": "316", "name": "Datrex (none listed)" },
{ "id": "317", "name": "S.O.S. Food Lab (none listed)" },
{ "id": "318", "name": "Vita-Life (none listed)" },
{ "id": "319", "name": "Millenium Energy Bar several flavors (stats identical)" },
{ "id": "320", "name": "May Day Apple Cinnamon" },
{ "id": "321", "name": "UST Apple Cinnamon" },
{ "id": "322", "name": "Tac-Bar (none listed)" },
{ "id": "323", "name": "Kind Sweet and Spicy Hickory Smoked" },
{ "id": "324", "name": "Kind Sweet and Spicy Honey Mustard" },
{ "id": "325", "name": "Kind Sweet and Spicy Honey Smoked BBQ" },
{ "id": "326", "name": "Kind Sweet and Spicy Roasted Jalapeno" },
{ "id": "327", "name": "Kind Sweet and Spicy Thai Sweet Chili" },
{ "id": "328", "name": "Savory Harvest BBQ" },
{ "id": "329", "name": "Savory Harvest Pizza" },
{ "id": "330", "name": "Savory Harvest Sriracha" },
{ "id": "331", "name": "Sheffa Everything (onion, garlic, spices)" },
{ "id": "332", "name": "Sheffa Sesame" },
{ "id": "333", "name": "Mediterra Sundried Tomato & Basil" },
{ "id": "334", "name": "Mediterra Bell Peppers & Green Olives" },
{ "id": "335", "name": "Mediterra Black Olives & Walnuts" },
{ "id": "336", "name": "Mediterra Kale & Pumpkin Seeds" },
{ "id": "337", "name": "Sheffa Rosemary" },
{ "id": "338", "name": "Sheffa Spicy Chili" },
{ "id": "339", "name": "King's Hawaiian Hawaiian Sweet Hamburger Buns" },
{ "id": "340", "name": "Mission Organic Flour Tortillas" },
{ "id": "341", "name": "Old El Paso Flour Tortillas (restaurant style)" },
{ "id": "342", "name": "Mission Flour Tortilla Wraps, Rosemary & Olive Oil" },
{ "id": "343", "name": "Mission Wraps, Sun-Dried Tomato Basil" },
{ "id": "344", "name": "Mission Street Tacos flour tortillas" },
{ "id": "345", "name": "Signature Safeway Flour Tortillas" },
{ "id": "346", "name": "Signature Safeway Mini Original Pizza Crusts" },
{ "id": "347", "name": "Thomas Bagels, Plain" },
{ "id": "348", "name": "Flatout Artisan Thin Pizza Crust" },
{ "id": "349", "name": "Boboli Mini Original Pizza Crusts" },
{ "id": "350", "name": "Oroweat Crustini Sandwich Rolls" },
{ "id": "351", "name": "Signature Safeway French Hoagie Rolls" },
{ "id": "352", "name": "Oroweat Whole Multi-Grain sliced sandwich bread" },
{ "id": "353", "name": "Oroweat Sandwich Thins, 100% Whole Wheat" },
{ "id": "354", "name": "Flatout ProteinUP Flatbread, Red Pepper Hummus" },
{ "id": "355", "name": "PF Bakeries Fresh Pita Bread" },
{ "id": "356", "name": "P-Tabun Fresh White Pita Bread" },
{ "id": "357", "name": "Joseph's Flax, Oat Bran & Whole Wheat Pita Bread" },
{ "id": "358", "name": "Joseph's Lavash Bread, Flax Oat Bran & Wheat" },
{ "id": "359", "name": "Sports Research Extra Virgin Organic Coconut Oil Capsules" },
{ "id": "360", "name": "Julian Bakery Keto Thin® C8 Oil" },
{ "id": "361", "name": "Keto Science Ketogenic MCT Oil from Pure Coconuts" },
{ "id": "362", "name": "South Chicago Packing Lard All-Purpose Shortening" },
{ "id": "363", "name": "4th & Heart Ghee Butter, Original Recipe" },
{ "id": "364", "name": "Gold Seal Vegetable Ghee" },
{ "id": "365", "name": "Radha Beauty Premium MCT Oil" },
{ "id": "366", "name": "Sevenhills Wholefoods Bio Cacao/Cacaoboter, Wafels" },
{ "id": "367", "name": "Kirkland Extra Virgin Olive Oil, jug" },
{ "id": "368", "name": "310 Nutrition MCT Oil, Keto, and Paleo Friendly" },
{ "id": "369", "name": "Brain Octane Premium C8 MCT Coconuts Oil Single" },
{ "id": "370", "name": "Keppi Store MCT Oil" },
{ "id": "371", "name": "Level Up Clean MCT Oil" },
{ "id": "372", "name": "FBOMB MCT Oil: All-Natural On-The-Go" },
{ "id": "373", "name": "Hoosier Hill Farm Butter Powder" },
{ "id": "374", "name": "Kraft Real Mayo packet" },
{ "id": "375", "name": "Vegan Pure Keto Protein Powder" },
{ "id": "376", "name": "Foothills Naturals Coconut Milk Powder Organic" },
{ "id": "377", "name": "Z Natural Foods Organic Coconut Milk Powder" },
{ "id": "378", "name": "Hoosier Hill Farm Heavy Cream Powder" },
{ "id": "379", "name": "Earth Circle Organics Organic Coconut Cream Powder" },
{ "id": "380", "name": "Nutristore Sausage Crumbles (freeze-dried)" },
{ "id": "381", "name": "Rob's Red Mill White Hulled Sesame Seeds" },
{ "id": "382", "name": "Manitoba Harvest Hemp Hearts" },
{ "id": "383", "name": "Rob's Red Mill Hulled Hemp Seed Hearts" },
{ "id": "384", "name": "Survival Tabs Butterscotch" },
{ "id": "385", "name": "Nature Restore Acai Berry Powder" },
{ "id": "386", "name": "Hoosier Hill Farm Cheddar Cheese Powder" },
{ "id": "387", "name": "Kraft Creamy Ceasar Salad Dressing packet" },
{ "id": "388", "name": "Bragg Nutritional Yeast" },
{ "id": "389", "name": "Sukrin Sesame Flour" },
{ "id": "390", "name": "PB2 Powdered Peanut Butter" },
{ "id": "391", "name": "Quest Protein Powder, Chocolate Milkshake packet" },
{ "id": "392", "name": "Wedderspoon Manuka Honey" },
{ "id": "393", "name": "Knorr Classic Brown Gravy Mix" },
{ "id": "394", "name": "Lono Life Savory Chicken Bone Broth" },
{ "id": "395", "name": "Bare Bones Bone Broth (Chicken) Instant Protein Mix" },
{ "id": "396", "name": "Anthony's Textured Vegetable Protein (soy flour)" },
{ "id": "397", "name": "Gunter's Pure Clover Honey Bear" },
{ "id": "398", "name": "Kirkland Pure Clover Honey" },
{ "id": "399", "name": "Welch's Jelly: Concord Grape" },
{ "id": "400", "name": "Smuckers Simply Fruit Spread: Strawberry" },
{ "id": "401", "name": "Veggicopia Dips Single Serving, Original Hummus" },
{ "id": "402", "name": "Veggicopia Dips Single Serving, Roasted Red Pepper Hummus" },
{ "id": "403", "name": "Wild Garden Hummus to Go, Roasted Garlic" },
{ "id": "404", "name": "Veggicopia Dips Single Serving Cup, Edemame Dip" },
{ "id": "405", "name": "Chicken of the Sea Sardines in EVOO" },
{ "id": "406", "name": "Hormel Corned Beef Hash" },
{ "id": "407", "name": "Dennison's Hot Chili Con Carne with Beans" },
{ "id": "408", "name": "Stagg Dynamite Hot Chili with Beans" },
{ "id": "409", "name": "Chef Boyardee Mini Beef Ravioli in Tomato & Meat Sauce" },
{ "id": "410", "name": "Dinty Moore Beef Stew" },
{ "id": "411", "name": "Progresso Soup, Chicken & Wild Rice" },
{ "id": "412", "name": "Progresso Soup, Creamy Mushroom" },
{ "id": "413", "name": "Progresso Soup, Lentil" },
{ "id": "414", "name": "Progresso Soup, Light Chicken Noodle" },
{ "id": "415", "name": "Progresso Soup, New England Clam Chowder" },
{ "id": "416", "name": "Progresso Soup, Rich & Hearty Chicken Corn Chowder" },
{ "id": "417", "name": "Progresso Soup, Rich & Hearty New England Clam Chowder" },
{ "id": "418", "name": "Progresso Soup, Rich & Hearty Three Meat Sauce" },
{ "id": "419", "name": "Progresso Soup, Savory Beef Barley Vegetable" },
{ "id": "420", "name": "Progresso Soup, Savory Chicken & Wild Rice" },
{ "id": "421", "name": "Progresso Soup, Traditional Chicken & Herb Dumplings" },
{ "id": "422", "name": "Progresso Soup, Traditional Chicken Noodle" },
{ "id": "423", "name": "Progresso Soup, Traditional Creamy Chicken Alfredo" },
{ "id": "424", "name": "Progresso Soup, Traditional Hearty Chicken & Rotini" },
{ "id": "425", "name": "Progresso Soup, Traditional Hearty Chicken Pot Pie Style" },
{ "id": "426", "name": "Progresso Soup, Traditional Loaded Potato with Bacon" },
{ "id": "427", "name": "Progresso Soup, Traditional Minestrone" },
{ "id": "428", "name": "Progresso Soup, Traditional New England Clam Chowder" },
{ "id": "429", "name": "Progresso Soup, Traditional Savory Beef Barley Vegetable" },
{ "id": "430", "name": "Progresso Soup, Traditional Tomato Basil" },
{ "id": "431", "name": "Progresso Soup, Traditional Vegetable" },
{ "id": "432", "name": "Progresso Soup, Traditional Zesty Chicken & Black Bean" },
{ "id": "433", "name": "Progresso Soup, Vegetable Classics 99% Fat Free Lentil" },
{ "id": "434", "name": "Progresso Soup, Vegetable Classics Lentil" },
{ "id": "435", "name": "Progresso Soup, Vegetable Classics Tomato Rotini" },
{ "id": "436", "name": "Campbell's Soup, Chicken Noodle" },
{ "id": "437", "name": "Campbell's Soup, Clam Chowder" },
{ "id": "438", "name": "Campbell's Soup, Cream of Mushroom" },
{ "id": "439", "name": "Campbell's Soup, Tomato" },
{ "id": "440", "name": "Campbell's Soup, Vegetable Beef" },
{ "id": "441", "name": "Campbell's Soup, Vegetable Beef (low sodium)" },
{ "id": "442", "name": "Healthy Choice Soup, Chicken Noodle" },
{ "id": "443", "name": "Healthy Choice Soup, Country Vegetable" },
{ "id": "444", "name": "Healthy Choice Soup, Tomato Basil" },
{ "id": "445", "name": "Healthy Choice Soup, Zesty Gumbo" },
{ "id": "446", "name": "Amy's Organic Chunky Vegetable Soup" },
{ "id": "447", "name": "Amy's Organic Lentil Soup" },
{ "id": "448", "name": "Amy's Organic Tomato Bisque" },
{ "id": "449", "name": "Amy's Organic Vegetable Barley Soup" },
{ "id": "450", "name": "Velveeta Shells & Cheese, Original" },
{ "id": "451", "name": "Rice-A-Roni Chicken & Broccoli" },
{ "id": "452", "name": "Rice-A-Roni Fried Rice" },
{ "id": "453", "name": "Rice-A-Roni Spanish Rice" },
{ "id": "454", "name": "Kraft Macaroni & Cheese, Original" },
{ "id": "455", "name": "Kraft Macaroni & Cheese, Three Cheese" },
{ "id": "456", "name": "Kraft Velveeta Cheesy Skillets, Chili Cheese Mac" },
{ "id": "457", "name": "Kraft Velveeta Cheesy Skillets, Creamy Beef Stroganoff" },
{ "id": "458", "name": "Kraft Velveeta Cheesy Skillets, Nacho Supreme" },
{ "id": "459", "name": "Chef Boyardee Mini ABC's & 123's with Meatballs" },
{ "id": "460", "name": "Chef Boyardee Mini Beef Ravioli in Tomato & Meat Sauce" },
{ "id": "461", "name": "Chef Boyardee Mini Overstuffed Beef Ravioli" },
{ "id": "462", "name": "Chef Boyardee Mini Spaghetti & Meatballs" },
{ "id": "463", "name": "Chef Boyardee Mini Spaghetti-Os Original" },
{ "id": "464", "name": "Chef Boyardee Mini Spaghetti-Os with Meatballs" },
{ "id": "465", "name": "Dinty Moore Beef Stew" },
{ "id": "466", "name": "Stagg Dynamite Hot Chili with Beans" },
{ "id": "467", "name": "Hormel Compleats Beef Steak Tips" },
{ "id": "468", "name": "Hormel Compleats Chicken Alfredo" },
{ "id": "469", "name": "Hormel Compleats Chicken Breast & Gravy with Mashed Potatoes" },
{ "id": "470", "name": "Hormel Compleats Chicken Parmesan" },
{ "id": "471", "name": "Hormel Compleats Chicken Primavera" },
{ "id": "472", "name": "Hormel Compleats Chicken Rice & Vegetable" },
{ "id": "473", "name": "Hormel Compleats Homestyle Chicken & Noodles" },
{ "id": "474", "name": "Hormel Compleats Roast Beef & Gravy with Mashed Potatoes" },
{ "id": "475", "name": "Hormel Compleats Turkey & Dressing" },
{ "id": "476", "name": "Progresso Soup, Chicken & Wild Rice" },
{ "id": "477", "name": "Progresso Soup, Creamy Mushroom" },
{ "id": "478", "name": "Progresso Soup, Lentil" },
{ "id": "479", "name": "Progresso Soup, Light Chicken Noodle" },
{ "id": "480", "name": "Progresso Soup, New England Clam Chowder" },
{ "id": "481", "name": "Progresso Soup, Rich & Hearty Chicken Corn Chowder" },
{ "id": "482", "name": "Progresso Soup, Rich & Hearty New England Clam Chowder" },
{ "id": "483", "name": "Progresso Soup, Rich & Hearty Three Meat Sauce" },
{ "id": "484", "name": "Progresso Soup, Savory Beef Barley Vegetable" },
{ "id": "485", "name": "Progresso Soup, Savory Chicken & Wild Rice" },
{ "id": "486", "name": "Progresso Soup, Traditional Chicken & Herb Dumplings" },
{ "id": "487", "name": "Progresso Soup, Traditional Chicken Noodle" },
{ "id": "488", "name": "Progresso Soup, Traditional Creamy Chicken Alfredo" },
{ "id": "489", "name": "Progresso Soup, Traditional Hearty Chicken & Rotini" },
{ "id": "490", "name": "Progresso Soup, Traditional Hearty Chicken Pot Pie Style" },
{ "id": "491", "name": "Progresso Soup, Traditional Loaded Potato with Bacon" },
{ "id": "492", "name": "Progresso Soup, Traditional Minestrone" },
{ "id": "493", "name": "Progresso Soup, Traditional New England Clam Chowder" },
{ "id": "494", "name": "Progresso Soup, Traditional Savory Beef Barley Vegetable" },
{ "id": "495", "name": "Progresso Soup, Traditional Tomato Basil" },
{ "id": "496", "name": "Progresso Soup, Traditional Vegetable" },
{ "id": "497", "name": "Progresso Soup, Traditional Zesty Chicken & Black Bean" },
{ "id": "498", "name": "Progresso Soup, Vegetable Classics 99% Fat Free Lentil" },
{ "id": "499", "name": "Progresso Soup, Vegetable Classics Lentil" },
{ "id": "500", "name": "Progresso Soup, Vegetable Classics Tomato Rotini" },
{ "id": "501", "name": "Progresso Soup, Vegetable Classics Tomato" },
{ "id": "502", "name": "Progresso Soup, Vegetable Classics Vegetable" },
{ "id": "503", "name": "Campbell's Soup, Chicken Noodle" },
{ "id": "504", "name": "Campbell's Soup, Clam Chowder" },
{ "id": "505", "name": "Campbell's Soup, Cream of Mushroom" },
{ "id": "506", "name": "Campbell's Soup, Tomato" },
{ "id": "507", "name": "Campbell's Soup, Vegetable Beef" },
{ "id": "508", "name": "Campbell's Soup, Vegetable Beef (low sodium)" },
{ "id": "509", "name": "Healthy Choice Soup, Chicken Noodle" },
{ "id": "510", "name": "Healthy Choice Soup, Country Vegetable" },
{ "id": "511", "name": "Healthy Choice Soup, Tomato Basil" },
{ "id": "512", "name": "Healthy Choice Soup, Zesty Gumbo" },
{ "id": "513", "name": "Amy's Organic Chunky Vegetable Soup" },
{ "id": "514", "name": "Amy's Organic Lentil Soup" },
{ "id": "515", "name": "Amy's Organic Tomato Bisque" },
{ "id": "516", "name": "Amy's Organic Vegetable Barley Soup" },
{ "id": "517", "name": "Amy's Organic Alphabet Soup" },
{ "id": "518", "name": "Hormel Compleats Beef Steak Tips" },
{ "id": "519", "name": "Hormel Compleats Chicken Alfredo" },
{ "id": "520", "name": "Hormel Compleats Chicken Breast & Gravy with Mashed Potatoes" },
{ "id": "521", "name": "Hormel Compleats Chicken Parmesan" },
{ "id": "522", "name": "Hormel Compleats Chicken Primavera" },
{ "id": "523", "name": "Hormel Compleats Chicken Rice & Vegetable" },
{ "id": "524", "name": "Hormel Compleats Homestyle Chicken & Noodles" },
{ "id": "525", "name": "Hormel Compleats Roast Beef & Gravy with Mashed Potatoes" },
{ "id": "526", "name": "Hormel Compleats Turkey & Dressing" },
{ "id": "527", "name": "Dinty Moore Beef Stew" },
{ "id": "528", "name": "Stagg Dynamite Hot Chili with Beans" }
  ]
  );
  const [savedTasks, setSavedTasks] = useState([]);

  const handlePress = (task) => {
    setSavedTasks([...savedTasks, task]);
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#545353' }}>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ borderRadius: 6, height: 40, borderColor: '#121212', borderWidth: 6, marginBottom: '3%', color: 'white', backgroundColor: '#121212', textAlign: 'center' }}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder="Search tasks"
          placeholderTextColor="white"
        />
        <FlatList
          data={filteredTasks}
          style={{height:"40%"}}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={{borderRadius: 6}} onPress={() => handlePress(item)}>
              <Text style={{ color: 'white', backgroundColor: '#121212', padding: 10, marginVertical: 5 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <Text style={{ color: 'white', marginTop: 20 }}>Saved Tasks:</Text>
        <FlatList
          data={savedTasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TouchableOpacity style={{borderRadius: 6}}>
            <Text style={{ color: 'white', backgroundColor: '#121212', padding: 10, marginVertical: 5 }}>{item.name}</Text>
            </TouchableOpacity>}
        />
      </View>
    </SafeAreaView>
  );
};

export default TodoListPage;
﻿