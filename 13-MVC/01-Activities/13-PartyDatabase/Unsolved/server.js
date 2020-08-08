var orm = require("./config/orm.js");

// Find all the party names.
orm.selectParties("party_name", "parties");

// Find all the client names.
orm.selectClients("client_name", "clients");

// Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
