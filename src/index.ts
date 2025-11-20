#!/usr/bin/env node
import { GeniusMcpServer, ApiKeyManager, McpFunction } from '@geniusagents/mcp';
import { GeoCodeFunction } from "./functions/geocode.function.js";
import { ReverseGeoCodeFunction } from "./functions/reversegeocode.function.js";
import { SearchPlacesFunction } from "./functions/seachplaces.function.js";
import { PlaceDetailsFunction } from "./functions/placedetails.function.js";
import { DistanceMatrixFunction } from "./functions/distancematrix.function.js";
import { ElevationFunction } from "./functions/elevation.function.js";
import { DirectionsFunction } from "./functions/directions.function.js";

// Initialize the ApiKeyManager with the MCP Name for the Genius Dashboard
ApiKeyManager.initialize({
    mcpName: "Maps",
    dashboardUrl: process.env.DASHBOARD_URL || "https://dashboard.geniusagents.nl/api/mcp"
});

const functions: McpFunction[] = [
    new GeoCodeFunction(),
    new ReverseGeoCodeFunction(),
    new SearchPlacesFunction(),
    new PlaceDetailsFunction(),
    new DistanceMatrixFunction(),
    new ElevationFunction(),
    new DirectionsFunction()
];

const server = new GeniusMcpServer("Maps MCP Service", 3006, functions);
server.run().catch(console.error);