# Changelog

All notable changes to this project will be documented in this file.

## 0.4.1 - 2019-03-21

## Fixed

- Fixed a typo in welcome page.

## 0.4.0 - 2019-03-21

### Changed

- Fine-tuning of offers price picking.
- Rebalance algorithm will now pass less trades and assets shares will generally
  be better balanced.
- Assets whose global market price is not known is now is now defined as its bid
  price at a depth of 50XLM (assumed liquidation price). This is intended to
  prevent over-valuation of those assets.

### Removed

- Liquidity providing feature has been removed from the rebalancing algorithm.
  This feature had a negative effect on portfolio performance in case of
  important price moves.

### Fixed

- Fix chart display when pie slice is selected.

## 0.3.0 - 2019-03-14

### Added

- Equilibre.io can now be installed on some mobile devices
- Support for assets for which global market price is unknown

### Changed

- Improve portfolio pie chart responsivness
- Show some activity while login in
- Prevent interaction while login in

### Fixed

- Rebalancing now works as intended when setting a quantity target for an asset
- Rebalancing now works as intended when setting asset target to 0
- Fix a mistake that prevented marginal assets rebalancing setup to be saved
- Fix a case were marginal assets could not be rebalanced

## 0.2.0 − 2019-03-05

### Added

- Small screen interface (mobile-ready)
- Enable service worker

### Changed

- Switch to js-stellar-sdk 0.14.0
- Move "licence" tab into the footer

## 0.1.1 − 2019-02-18

### Fixed

- Fix portfolio template saving

## 0.1.0 − 2019-02-17

Beta 1 release
