// services/suspects.service.js
"use strict";
const DbMixin = require("../mixins/db.mixin");
module.exports = {
	name: "suspects",
	mixins: [DbMixin("suspects")],
	settings: {
		fields: ["_id", "name", "passport", "photo"]
	},
	methods: {
		async seedDB() {
			await this.adapter.insertMany([
				{ name: "Saruman", passport: "LOR1000", photo: "https://shorturl.at/ginB7" },
				{ name: "Cersei", passport: "GOT2000", photo: "https://shorturl.at/gkzMQ" },
				{ name: "Joker", passport: "BAT3000", photo: "https://shorturl.at/knozV" },
				{ name: "Walter", passport: "BRE4000", photo: "https://shorturl.at/ekrMO" },
				{ name: "Magneto", passport: "XMN5000", photo: "https://shorturl.at/kCKLZ" },
				{ name: "Thanos", passport: "AVE6000", photo: "https://shorturl.at/qQTU9" },
				{ name: "Arlequina", passport: "SSQ7000", photo: "https://shorturl.at/nwACK" }
			]);
		}
	}
};