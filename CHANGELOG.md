# Changelog

All notable changes to this project will be documented in this file.

## 1.0.0 - 2019-07-06

### Added

- Deal with cases where there's not enough XLM to rebalance the portfolio in one
  step.
- Lock a mimimum XLM balance to pay for network reserve & offers.

### Changed

- Theme Highstock according to new Equilibre.io colors.
- Target configuration form appears in a modal box.
- Add a title to each card.
- Don't raise an error anymore when rebalancing target is over/under portfolio
  total value by less than 1‰.

### Fixed

- Fixed a bug that could lock the app on very low width display.
- Lower font size on wider screens. (Thanks [@Pselden] & Damian)
- Fix a case in which allocation check limits were bypassed.

## 0.11.2 - 2019-06-28

### Fixed

- Adjust text size on small screen devices.
- Fix Source Sans Pro font path.

## 0.11.1 - 2019-06-28

### Changed

- Complete interface re-design. (Thanks Alris Can)
- Make demo easier to spot.

## 0.11.0 - 2019-06-25

### Added

- Legal disclaimer.

### Changed

- Rewrite 'Welcome' page.
- Easier access to the demo account & the related article.
- Tiny theme tweaks.

## 0.10.2 - 2019-06-22

### Changed

- Update [cosmic-lib] to 1.5.1. (Security fix)

## 0.10.1 - 2019-06-17

### Fixed

- Fix an error in fiat historical price refreshing that prevented portfolio
  history to get computed in some cases.

## 0.10.0 - 2019-06-15

### Added

- Add the portfolio history chart.

### Removed

- Removed pricing in fiat currencies that were not fully supported: BGN, HRK,
  ISK & RON.

### Changed

- Dramatically improve historical prices caching & performance.
- Use Highstock for all charts (saves 224Kb).
- Automatically reload the application once an update gets installed.

### Fixed

- Properly fetch the orderbook for assets with code "XLM" which are not native
  lumens.
- Fix a case in which the price graph printed a value one day in the future.

## 0.9.1 - 2019-06-08

### Changed

- Improve theme: font & background colors, element spacing, form styling, chart
  font & colors, smaller footer, small screen display...

## 0.9.0 - 2019-06-01

### Added

- It is now possible to add new assets to the portfolio.
- It is now possible to enable/disable anchors on-the-fly for tethered assets
  that have multiple known anchors. The rebalancing algorithm will gradually
  move the funds to comply with the new setup in about 5~15 steps.
- Add the "remove" rebalancing mode to liquidate an asset and remove its
  trustlines.

### Changed

- Try to make an additional profit when an anchor for a tethered asset is out of
  balance.
- Up-to-date targets for demo portfolio.

### Fixed

- Fix a regression introduced in 0.8.0 that prevented rebalancing operations to
  get generated in some cases.
- Raise up the number of fetched offers for orderbooks to fix an edge-case where
  price estimation for native assets other than Lumens would fail.
- Handle the edge-case of a fully rebalanced portfolio which has obsolete offers
  to cancel.
- US Dollar name now displays properly.
- Truncate default quantity in target size setup.
- Fix a rare bug that prevented new trustline to show up.
- Fix a rare bug that prevented target of empty balance to be computed properly.

## 0.8.1 - 2019-05-24

### Changed

- The portfolio pie chart is now displayed instantly.

### Fixed

- Portfolio pie chart: Fix cases that caused wrong positioning.
- Portfolio price chart: Make data for last day display properly (a timestamp
  issue caused weird roundings for crypto assets).
- Fix a bug that caused sell offers under 1XLM to pick absurdly high prices
  instead of being filtered out.

## 0.8.0 - 2019-05-17

### Added

- Rebalancing: Assets with multiple anchors whose are imbalanced now gets
  pro-actively rebalanced. This happens once the asset itself is balanced
  enough. This is done by little steps to mitigate the risks when only one of
  the two balancing trade is taken: anchorA to XLM or XLM to AnchorB.

### Changed

- Rebalancing: Native assets other than lumens don't use global market prices
  anymore, as those prices are not reliable due to market manipulations. This
  change affects valuation & price picking of: MOBI, REPO, RMT, SLT, TERN.
- Rebalancing: Anchors risk-balancing rules are now strictly applied when
  crafting transactions.
- Improve compliance with the [PWA] standard.
- Improve loading time.

## 0.7.0 - 2019-05-11

### Added

- Settings: 30 additional reference currencies (total: 33).

### Fixed

- Rebalancing: Being the quote currency, XLM cannot be in "ignore" mode.

## 0.6.1 - 2019-05-04

### Fixed

- Fix a mistake that prevented to select "Ignore" rebalancing mode.

## 0.6.0 - 2019-05-03

### Compatibility

This version comes with significant changes to the rebalancing targets
configuration. It will automatically convert your previous setup to the new
format. The first time you'll rebalance your portfolio, you'll have to
`[Save]` the converted configuration (which will lead to exactly the same
balance).

### Added

- New balancing mode "weight" that replaces "equal". Weight let you specify
  relative sizes for your positions. Once "percentage" & "quantity" targets have
  been allocated, the remaining funds are split between "weight" targets.
- New balancing mode "ignore".

### Changed

- Balancing mode "percentage" is now strictly applied. Before, it would act as
  "weight" in case unallocated funds remains − which could lead to a confusing
  user experience.
- Raise an error when total "percentage" targets are over hundred. Before, it
  would lower every target to get back to a valid sum − but this could lead to
  confusion as well.
- Remove Stronghold anchors from the trusted list. (Not active anymore)
- Rebalancing interface displays "Goal" according to rebalancing mode
  (weight/percentage/quantity/ignore).
- Rebalancing interface "Divergence" is now displayed relatively to portfolio
  total value.

### Fixed

- All overallocation/underallocation cases are now properly detected.
- Detect when an anchor order book is not tradable anymore.
- Rebalancing targets are now properly sorted after changes.
- Fix an inconsistency that would cause rebalance targets to be uselessly
  computed multiple times.
- Improve loading message spacing.

## 0.5.0 - 2019-04-19

### Added

- Logic for orders that need to take place over multiple anchors, such as
  position entries and exits.
- Equilibre.io will now tend to spread the position equally over asset multiple
  anchors.
- Apply price picking optimizations when rebalancing assets with quantity
  targets.
- Validity span of 5 minutes for transactions.
- Animate transaction signing frame.

### Fixed

- Fix background image of transaction signing frame.

## 0.4.5 - 2019-04-12

### Changed

- Rebalancing & activity tabs now refresh immediately after validating
  rebalancing operations.
- Improve memory management.
- Update [cosmic-lib] to 1.2.10.

### Fixed

- Fix a 0.4.4 regression which sometimes causes coin image to not display under
  activity tab.
- Fix a 0.4.4 regression which caused displayed anchor prices to be incorrect
  until first price refresh.
- Fix a bug that would cause rebalancing to fail when performed immediately
  after canceling offers - thanks [@ddombrowsy].

## 0.4.4 - 2019-04-05

### Changed

- Interface loads considerably faster.
- Interface reflects account/offers change considerably faster.

## 0.4.3 - 2019-04-04

### Fixed

- Fix a regression introduced in 0.4.2 that prevented optimal offer price
  picking.

## 0.4.2 - 2019-04-03

### Fixed

- Rebalancing orders are now computed right after login, as intended.
- Fix a memory leak in portfolio pie chart widget - thanks [@pawelfus].

## 0.4.1 - 2019-03-21

### Fixed

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

[cosmic-lib]: https://github.com/cosmic-plus/node-cosmic-lib/blob/master/CHANGELOG.md
[pwa]: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction
[@ddombrowsy]: https://github.com/ddombrowsky
[@pawelfus]: https://github.com/pawelfus
[@pselden]: https://github.com/pselden
