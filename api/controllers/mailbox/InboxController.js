/**
 * mailbox/MailboxControllerController
 *
 * @description :: Server-side logic for managing mailbox/mailboxcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `Mailbox/MailboxControllerController.render()`
   */
  render: function (req, res) {
    return res.view('mailbox/inbox', {
      showMailboxTreeview: true
    });
  }
};

