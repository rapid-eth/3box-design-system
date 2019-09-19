import Atoms from "./atoms";
const Molecules =  require("./molecules");
import Organisms from "./organisms";
import Templates from "./templates";

// Atoms
module.exports.BackgroundImage = Atoms.BackgroundImage
module.exports.Box = Atoms.Box
module.exports.Container = Atoms.Container
module.exports.Button = Atoms.Button
module.exports.Flex = Atoms.Flex
module.exports.Heading = Atoms.Heading
module.exports.Image = Atoms.Image
module.exports.Paragraph = Atoms.Paragraph
module.exports.Span = Atoms.Span
module.exports.Text = Atoms.Text

// Molecules
module.exports.Modal = Molecules.Modal
module.exports.Panel = Molecules.Panel
module.exports.Portal = Molecules.Portal
module.exports.Toast = Molecules.Toast

export default {
  ...Atoms,
  ...Molecules,
  ...Organisms,
  ...Templates
}