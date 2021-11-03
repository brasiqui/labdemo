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
				{ name: "Saruman", passport: "LOR1000", photo: "https://shorturl.at/cBK14" },
				{ name: "Cersei", passport: "GOT2000", photo: "https://shorturl.at/dAJY9" },
				{ name: "Joker", passport: "BAT3000", photo: "https://shorturl.at/knozV" },
				{ name: "Walter", passport: "BRE4000", photo: "https://shorturl.at/dmnpE" },
				{ name: "Magneto", passport: "XMN5000", photo: "https://shorturl.at/fzHNW" },
				{ name: "Thanos", passport: "AVE6000", photo: "https://shorturl.at/motO4" },
				{ name: "Arlequina", passport: "SSQ7000", photo: "https://shorturl.at/clB15" }
			]);
		}
	}
};
