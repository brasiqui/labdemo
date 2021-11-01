// services/doctors.service.js
module.exports = {
  name: "doctors",
  events: {
    "fever.detected"(ctx) {
      this.logger.info("Doctors received the message.")
      this.logger.info("Name:", ctx.params.name);
      this.logger.info("Temperature:", ctx.params.temperature);
    }
  }
};